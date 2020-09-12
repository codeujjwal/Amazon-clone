import React from "react";
import "./subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useRedux } from "../../context api/StateProvider";
import { basketTotal } from "../../context api/Reducer";
import { useHistory } from "react-router-dom";

function Subtotal() {
  const history = useHistory();
  const [{ basket }] = useRedux();

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket?.length} items): <strong>{value}</strong>
            </p>
            <small className={"subtotal_gift"}>
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
      <button
        onClick={() => (basket?.length === 0 ? null : history.push("/payment"))}
        className={
          "checkoutbutton " + (basket?.length === 0 ? "disabled" : "abled")
        }
      >
        Proceed To Checkout
      </button>
    </div>
  );
}

export default Subtotal;
