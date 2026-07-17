import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import Home from "./components/Home";
import "bootstrap/dist/css/bootstrap.min.css";
const params = new URLSearchParams(window.location.search);

const incomingToken = params.get("token");
const incomingUsername = params.get("username");
const incomingWallet = params.get("walletBalance");

if (incomingToken) {
  localStorage.setItem("token", incomingToken);
}

if (incomingUsername) {
  localStorage.setItem("username", incomingUsername);
}

if (incomingWallet) {
  localStorage.setItem("walletBalance", incomingWallet);
}

if (incomingToken || incomingUsername || incomingWallet) {
  window.history.replaceState({}, document.title, "/");
}

if (!localStorage.getItem("token")) {
  window.location.href = "http://localhost:3000/login";
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  </React.StrictMode>,
);
