import React from "react";
import "./payment.css";
import add from "../../images/add.png";
import { useRedux } from "../../context api/StateProvider";
import { Link, useHistory } from "react-router-dom";
import CheckoutProduct from "../CheckoutProduct/CheckoutProduct";
import CurrencyFormat from "react-currency-format";
import { basketTotal } from "../../context api/Reducer";

function Payment() {
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "EMPTY_BASKET",
    });
    history.replace("/");
    alert("YOUR ORDER IS PLACED");
  };
  const [{ basket, user }, dispatch] = useRedux();
  const history = useHistory();

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
                <button className="buynow">BUY NOW</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
