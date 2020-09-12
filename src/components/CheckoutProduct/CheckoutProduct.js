import React from "react";
import "./checkoutproduct.css";
import StarIcon from "@material-ui/icons/Star";
import { useRedux } from "../../context api/StateProvider";
function CheckoutProduct({ id, title, image, rating, price, nobutton }) {
  const [, dispatch] = useRedux();
  const removefrombasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
  return (
    <div className="cproduct">
      <img className="cproduct_image" src={image} alt="" />
      <div className="cproduct_info">
        <p className="cproduct_title">{title}</p>
        <p className="cproduct_price">
          <small>RS </small>
          <strong>{price.toLocaleString()}</strong>
        </p>
        <div className="cproduct_rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <StarIcon />
            ))}
        </div>
        {nobutton ? null : (
          <button onClick={removefrombasket}>Remove from Basket</button>
        )}
      </div>
    </div>
  );
}

export default CheckoutProduct;
