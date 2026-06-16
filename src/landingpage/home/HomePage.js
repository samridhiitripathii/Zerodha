import react from "react";
import Navbar from "../Navbar";
import Hero from "./Hero";
import Education from "./Education";
import Stats from "./Stats";
import Awards from "./Awards";
import Pricing from "./Pricing";
import OpenAccount from "../OpenAccount";
import Footer from "../Footer";


function HomePage() {
  return (
    <>
      
      <Hero />
      <Awards />
      <Stats />
      <Pricing />
      <Education />
      <OpenAccount />
      
    </>
  );
}

export default HomePage;
