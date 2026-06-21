
import React from "react";
import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection"
import Universe from "./Universe.js";


function ProductPage(){
    return (
      <div className="container">
        <Hero />
        <LeftSection
          imageURL="/media/kite.png"
          productDesc="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
          productName="Kite"
          tryDemo="#"
          learnMore="#"
          googlePlay="#"
          appStore="#"
        />
        <RightSection
          imageURL="/media/console.png"
          productDesc="Central Dashboard for your Zerodha account. Gain insights in your trades and investments with in-depth assessments"
          productName="Console"
          learnMore="#"
        />
        <LeftSection
          imageURL="/media/kiteconnect.png"
          productDesc="Build powerful trading applications with Kite Connect, Zerodha's developer-first HTTP APIs. Programmatically execute real-time orders, stream live market data, and manage portfolios with ease."
          productName="Kite Connect API"
          learnMore="#"
        />

        <RightSection
          imageURL="/media/coin.png"
          productDesc="Invest in thousands of commission-free direct mutual funds with Coin by Zerodha. Save up to 1% annually in distributor fees and maximize your long-term returns for free."
          productName="Coin"
          learnMore="#"
        />

        <p className="text-center align-items-center p-3">
          {" "}
          Want to know more about our technology stack? Go learn more by
          visiting Zerodha.tech blog.
        </p>

        <Universe />
      </div>
    );
}
export default ProductPage;