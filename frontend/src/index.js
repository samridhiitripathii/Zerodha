import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './landingpage/home/HomePage';
import PricingPage from './landingpage/pricing/PricingPage';
import SupportPage from "./landingpage/support/SupportPage";
import SignUp from './landingpage/signup/SignUp';
import ProductPage from './landingpage/products/ProductPage';
import AboutPage from "./landingpage/about/AboutPage";
import Navbar from './landingpage/Navbar';
import Footer from './landingpage/Footer';
import NotFound from './landingpage/NotFound';
import Login from './landingpage/login/Login';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route path="/pricing" element={<PricingPage />} />
      <Route path="/products" element={<ProductPage />} />
      <Route path="/support" element={<SupportPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
    <Footer />
  </BrowserRouter>,
);

