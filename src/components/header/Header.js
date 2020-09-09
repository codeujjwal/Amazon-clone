import React from "react";
import "./header.css";
import logo from "../../images/logo.png";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useRedux } from "../../context api/StateProvider";

function Header() {
  const [{ basket }] = useRedux();

  return (
    <div className="header">
      <Link to="/">
        <img className="logo" src={logo} alt="LOGO" />
      </Link>
      <div className="header_search">
        <input type="text" />
        <div className="header_search_icon">
          <SearchIcon />
        </div>
      </div>
      <div className="header_nav">
        <div className="header_option">
          <span className="header_optionlineoone">Hello Guest</span>
          <Link to="/login">
            <span className="header_optionlineotwo">Sign In</span>
          </Link>
        </div>
        <div className="header_option">
          <span className="header_optionlineoone">Returns</span>
          <span className="header_optionlineotwo">& orders</span>
        </div>
        <div className="header_option">
          <span className="header_optionlineoone">Your</span>
          <span className="header_optionlineotwo">Prime</span>
        </div>
        <Link to="/checkout">
          <div className="header_optionbasket">
            <ShoppingBasketIcon />{" "}
            <span className="header_optionlineotwo header_optionbasketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
