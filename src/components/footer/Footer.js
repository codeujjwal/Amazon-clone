import React from "react";
import "./footer.css";
import logo from "../../images/logo.png";

function Footer() {
  return (
    <div className="footer">
      <div className="footer_top">
        <div className="footer_1">
          <h3>Get to know us</h3>
          <ul>
            <li>About Us</li>
            <li>Careers</li>
            <li>Press Releases</li>
            <li>Amazon Cares</li>
            <li>Gift a Smile</li>
          </ul>
        </div>
        <div className="footer_2">
          <h3>Connect With Us</h3>
          <ul>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Instagram</li>
          </ul>
        </div>
        <div className="footer_3">
          <h3>Make Money With Us</h3>
          <ul>
            <li>Sell on amazon</li>
            <li>Sell under amazon Accelator</li>
            <li>Become an Affiliate</li>
            <li>Fulfilment bt Amazon</li>
            <li>Advertise Your Products</li>
            <li>Amazon Pay On Merchants</li>
          </ul>
        </div>
        <div className="footer_4">
          <h3>Let us Help You</h3>
          <ul>
            <li>COVID-19 and Amazon</li>
            <li>Your Account</li>
            <li>Return Centre</li>
            <li>100% Purchase protection</li>
            <li>Amazon App Download</li>
            <li>Help</li>
          </ul>
        </div>
      </div>
      <div className="line"></div>
      <div className="footer_down">
        <img className="footer_logo" src={logo} alt="Logo" />
        <div className="footer_countries">
          Australia Brazil Canada China France Germany Italy Japan Mexico United
          Kingdom United States
        </div>
      </div>
    </div>
  );
}

export default Footer;
