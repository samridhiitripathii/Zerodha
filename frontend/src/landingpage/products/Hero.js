import React from "react";
import "../../styles/Hero.css";

export default function Hero() {
  return (
    <div className="hero-container p-5 mt-5 mb-5 text-center">
      <h1 className="hero-title">Technology</h1>

      <p className="hero-subtitle">
        Sleek, modern and intuitive trading platforms
      </p>

      <a href="/products" className="hero-link">
        Check out our investment offerings <span>&rarr;</span>
      </a>

      <hr
        style={{
          border: "1px solid black",
          opacity: 0.3,
          width: "100%",
          marginTop: "30px",
        }}
      />
    </div>
  );
}
