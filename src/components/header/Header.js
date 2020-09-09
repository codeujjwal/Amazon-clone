import React from "react";
import "./header.css";
import logo from "../images/logo.png";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

function Header() {
  return (
    <div className="header">
      <img src={logo} alt="LOGO" height="30px" width="110px" />
      <div className="header_search">
        <input type="text" />
        <div className="header_search_icon">
          <SearchIcon />
        </div>
      </div>
      <div className="header_nav">
        <div className="header_option">
          <span className="header_optionlineoone">Hello Guest</span>
          <span className="header_optionlineotwo">Sign In</span>
        </div>
        <div className="header_option">
          <span className="header_optionlineoone">Returns</span>
          <span className="header_optionlineotwo">& orders</span>
        </div>
        <div className="header_option">
          <span className="header_optionlineoone">Your</span>
          <span className="header_optionlineotwo">Prime</span>
        </div>
        <div className="header_optionbasket">
          <ShoppingBasketIcon />{" "}
          <span className="header_optionlineotwo header_optionbasketCount">
            0
          </span>
        </div>
      </div>
    </div>
  );
}

export default Header;
