import React from "react";
import "./header.css";
import logo from "../../images/logo.png";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useRedux } from "../../context api/StateProvider";
import { auth } from "../../firebase/firebase";
import { useHistory, Link } from "react-router-dom";

function Header() {
  const [{ basket, user }] = useRedux();
  const history = useHistory();
  const handleAuth = () => {
    if (user) {
      auth.signOut();
      alert("signed out");
    } else {
      history.push("/login");
    }
  };

  const email = user?.email;
  const username = email?.substring(0, email.indexOf("@"));

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
        <div onClick={handleAuth} className="header_option auth">
          <span className="header_optionlineoone">Hello {username}</span>
          <span className="header_optionlineotwo">
            {user ? "Sign Out" : "Sign In"}
          </span>
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
