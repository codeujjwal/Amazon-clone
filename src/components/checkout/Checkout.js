import React from "react";
import "./checkout.css";
import Subtotal from "../subtotal/Subtotal";
import Add from "../../images/add.png";
import CheckoutProduct from "../CheckoutProduct/CheckoutProduct";
import { useRedux } from "../../context api/StateProvider";

function Checkout() {
  const [{ basket }] = useRedux();
  return (
    <div>
      <div className="checkout">
        <div className="checkout_left">
          <img className="checkout_add" src={Add} alt="add" />
          <div className="checkout_title">
            <h2>Your Shopping Cart</h2>
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
