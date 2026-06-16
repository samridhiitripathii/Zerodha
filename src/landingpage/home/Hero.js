import react from "react";
import "../../index.css";

function Hero() {
  return (
    <div className="container p-5 text-center">
      <div className="row ">
        <img
          src="media/homeHero.png"
          alt="Hero Image"
          className="img-fluid mb-10"
        />
      </div>
      <h1 className="mb-4 mt-5">Invest In Everything</h1>
      <p className="lead">
        Online Platform to Invest in Stocks, Derivatives, Mutual Funds and more
      </p>
      <button className="btn btn-primary ">Sign Up</button>
    </div>
  );
}

export default Hero;
