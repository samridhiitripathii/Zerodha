import React from "react";
import {Link} from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar bg-light navbar-expand-lg border-bottom">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img
            src="media/logo.svg"
            className="img-fluid ms-5"
            alt="logo"
            style={{ width: "30%" }}
          ></img>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse me-1 text-nowrap"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item text-nowrap">
              <Link className="nav-link" aria-current="page" to="/signup">
                Sign Up
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/products">
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/pricing">
                Pricing
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/support">
                Support
              </Link>
            </li>
          </ul>
          <form className="d-flex" role="search"></form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
