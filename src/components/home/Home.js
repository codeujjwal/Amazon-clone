import React from "react";
import "./home.css";
import Product from "../product/Product";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_background"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/SamsungM/M51/8thSept_GW/P38983965_IN_WLME_SamsungGalaxy_M51_New_Launch_DesktopTallHero_2_1500x600._CB405103024_.jpg"
          alt="background"
        />
      </div>
      <div className="home_row">
        <Product
          title="Redmi Note 9 Pro Max (Interstellar Black, 6GB RAM, 64GB Storage) - 64MP Quad Camera & Latest 8nm Snapdragon 720G"
          image={
            "https://i01.appmifile.com/webfile/globalimg/in/cms/BA2627B1-1735-7AE7-B5B3-304C3E73A99B.jpg"
          }
          price={16999}
          rating={4}
        />
        <Product
          title="Echo Dot (3rd Gen) – New and improved smart speaker with Alexa (Black)"
          image={
            "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQNdjI6bbus8wi9Pirgc_WaHMp8S5gmvN_az_XStS7ze6F11cCdgnM&usqp=CAc"
          }
          price={3499}
          rating={5}
        />
      </div>
      <div className="home_row">
        <Product
          title="Apple AirPods with Wireless Charging Case"
          image={
            "https://images-na.ssl-images-amazon.com/images/I/71IPFP9WJIL._SL1500_.jpg"
          }
          price={16499}
          rating={5}
        />
        <Product
          title="Prestige Iris 750 Watt Mixer Grinder 4 jar"
          image={
            "https://images-na.ssl-images-amazon.com/images/I/61Z4fxBfkVL._SL1000_.jpg"
          }
          price={2900}
          rating={3}
        />
        <Product
          title="boAt BassHeads 100 in-Ear Wired Earphones with Super Extra Bass (Black)"
          image={
            "https://images-na.ssl-images-amazon.com/images/I/719elVA3FvL._SL1500_.jpg"
          }
          price={398}
          rating={4}
        />
      </div>
      <div className="home_row">
        <Product
          title="Samsung 189 cm (75 Inches) 4K Ultra HD Smart QLED TV QA75Q80RAKXXL (Black) (2019 Model)"
          image={
            "https://images-na.ssl-images-amazon.com/images/I/81Pp%2BKXbrjL._SL1500_.jpg"
          }
          price={599000}
          rating={5}
        />
      </div>
    </div>
  );
}

export default Home;
