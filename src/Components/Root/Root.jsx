import React from "react";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router";
import Navbar from "../Navbar/Navbar";

const Root = () => {
  return (
    <div className="w-11/12 mx-auto">
      <div className="flex flex-col">
        <header>
          <Navbar></Navbar>
        </header>
        <main className="mt-1 flex-1 h-screen">
          <Outlet></Outlet>
        </main>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Root;
