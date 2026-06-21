import React from "react";
import "../../index.css";
import {Link} from 'react-router-dom';

function Hero() {
  return (
    <div className="container p-5 text-center">
      <div className="row ">
        <img
          src="/media/homeHero.png"
          alt=""
          className="img-fluid mb-10"
        />
      </div>
      <h1 className="mb-4 mt-5">Invest In Everything</h1>
      <p className="lead">
        Online Platform to Invest in Stocks, Derivatives, Mutual Funds and more
      </p>
      <button className="btn btn-primary ">
        <Link to="/signup" className="btn btn-primary text-decoration-none">
          Sign Up
        </Link>
      </button>
    </div>
  );
}

export default Hero;
