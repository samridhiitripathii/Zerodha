import React from "react";
import {Link} from 'react-router-dom';

function OpenAccount() {
  return (
    <div className="container p-5 text-center">
      <h1 className="mb-4 mt-5">Open an Account</h1>
      <p className="lead">
        Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O
        trades.
      </p>
      <button className="btn btn-primary ">
        <Link to="/signup" className="btn btn-primary">
          Sign Up now
        </Link>
      </button>
    </div>
  );
}

export default OpenAccount;
