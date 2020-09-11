import React from "react";
import "./checkout.css";
import Subtotal from "../subtotal/Subtotal";
import Add from "../../images/add.png";
import CheckoutProduct from "../CheckoutProduct/CheckoutProduct";
import { useRedux } from "../../context api/StateProvider";

function Checkout() {
  const [{ basket, user }] = useRedux();
  const email = user?.email;
  const username = email?.substring(0, email.indexOf("@"));

  return (
    <div>
      <div className="checkout">
        <div className="checkout_left">
          <img className="checkout_add" src={Add} alt="add" />
          <div className="checkout_title">
            <h3>
              {user === null
                ? "Sign In to Avail  offers"
                : `Hello, ${username}`}
            </h3>
            <h2>
              {basket.length === 0
                ? "Your shopping Cart is Empty"
                : "Your Shopping Cart"}
            </h2>
          </div>
        </div>
        <div className="checkout_right">
          <Subtotal />
        </div>
      </div>
      {basket.map((item) => (
        <CheckoutProduct
          id={item.id}
          price={item.price}
          title={item.title}
          rating={item.rating}
          image={item.image}
        />
      ))}
    </div>
  );
}

export default Checkout;
