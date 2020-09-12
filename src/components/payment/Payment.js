import React, { useState } from "react";
import "./payment.css";
import add from "../../images/add.png";
import { useRedux } from "../../context api/StateProvider";
import { Link } from "react-router-dom";
import CheckoutProduct from "../CheckoutProduct/CheckoutProduct";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import { basketTotal } from "../../context api/Reducer";

function Payment() {
  // useEffect(() => {
  //   const getClientSecret = async () => {
  //     const response = await axios({
  //       method: "/post",
  //       url: `/payment/create?total=${basketTotal(basket)}`,
  //     });
  //   };
  //   getClientSecret(response.data.clientSecret);
  // }, [basket]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);
  };
  const handleChange = (e) => {
    e.preventDefault();
  };
  const [{ basket, user }] = useRedux();
  const [disabled, setDisabled] = useState(true);
  const [processing, setProcessing] = useState("");
  const [succedded, setSuccedded] = useState(false);
  const [error, setError] = useState(null);

  // const stripe = useStripe();
  // const elements = useElements();
  const email = user?.email;
  const username = email?.substring(0, email.indexOf("@"));
  return (
    <div className="payment">
      <img className="payment_img" src={add} alt="amazon pay" />
      <div className="payment_container">
        <h1>
          Checkout <Link>({basket?.length} items)</Link>
        </h1>
        <div className="payment_section">
          <div className="payment_title">
            <h3>Delivery address</h3>
          </div>
          <div className="payment_address">
            <p>
              {user === null ? "Sign In to Continue" : `Hello, ${username}`}
            </p>
            <p>{user === null ? null : "123 , Fake Street"}</p>
            <p>{user === null ? null : "Delhi, India"}</p>
          </div>
        </div>
        <div className="payment_section">
          <div className="payment_title">
            <h3>Review items and delivery</h3>
          </div>
          <div className="payment_items">
            {basket.map((item) => (
              <CheckoutProduct
                nobutton
                id={item.id}
                price={item.price}
                title={item.title}
                rating={item.rating}
                image={item.image}
              />
            ))}
          </div>
        </div>
        <div className="payment_section">
          <div className="payment_title">
            <h3>Payment Methods</h3>
          </div>
          <div className="payment_details">
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />
              <div className="payment_price">
                <CurrencyFormat
                  renderText={(value) => (
                    <>
                      <h3>
                        ORDER TOTAL : <strong>{value}</strong>
                      </h3>
                    </>
                  )}
                  value={basketTotal(basket)}
                  decimalScale={2}
                  displayType={"text"}
                  prefix={"Rs "}
                  thousandSeparator={true}
                />
                <button disabled={processing || disabled || succedded}>
                  <span>{processing ? <p>Proccessing</p> : "BUY NOW"}</span>
                </button>
              </div>
              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
