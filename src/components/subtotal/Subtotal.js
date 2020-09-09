import React from "react";
import "./subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useRedux } from "../../context api/StateProvider";
import { basketTotal } from "../../context api/Reducer";

function Subtotal() {
  const [{ basket }] = useRedux();

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket?.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal_gift">
              <input type="checkbox" />
              This Order Contains a Gift
            </small>
          </>
        )}
        value={basketTotal(basket)}
        decimalScale={2}
        displayType={"text"}
        prefix={"Rs"}
        thousandSeparator={true}
      />
      <button>Proceed To Checkout</button>
    </div>
  );
}

export default Subtotal;
