import React from "react";
import Brands from "../components/Brands";
import FirstSlider from "../components/FirstSlider";
import LastSlider from "../components/LastSlider";
import Navbar from "../components/Navbar";
import Steps from "../components/Steps";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <FirstSlider />
      <Steps />
      <Brands />
      <LastSlider />
      <Footer />
    </>
  );
};

export default Home;
