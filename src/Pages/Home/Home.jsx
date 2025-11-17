import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Banner from "../../Components/Banner/Banner";
import Services from "../Services/Services";

const Home = () => {
  return (
    <div>
      <div className="py-8">
        <Banner></Banner>
      </div>
      <div>
        <Services></Services>
      </div>
      This is home
    </div>
  );
};

export default Home;
