import React from "react";
import StarIcon from "@material-ui/icons/Star";
import "./product.css";

function product({ id, title, image, price, rating }) {
  return (
    <div className="product">
      <div className="product_info">
        <p>{title}</p>
        <p className="product_price">
          <small>Rs</small>
          <strong>{price}</strong>
        </p>
        <div className="Product_rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <StarIcon />
            ))}
        </div>
      </div>
      <img src={image} alt="Product" />
      <button>Add To Basket</button>
    </div>
  );
}

export default product;
