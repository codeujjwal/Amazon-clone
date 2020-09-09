import React from "react";
import StarIcon from "@material-ui/icons/Star";
import "./product.css";
import { useRedux } from "../../context api/StateProvider";

function Product({ id, title, image, price, rating }) {
  const [, dispatch] = useRedux();
  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className="product">
      <div className="product_info">
        <p>{title}</p>
        <p className="product_price">
          <small>Rs </small>
          <strong>{price.toLocaleString()}</strong>
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
      <button onClick={addToBasket}>Add To Basket</button>
    </div>
  );
}

export default Product;
