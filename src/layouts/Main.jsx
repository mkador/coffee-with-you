import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../pages/Shared/Footer";
import Navbar from "../pages/Shared/Navbar";
import Header from "../pages/Home/Header/Header";

const Main = () => {
  return (
    <div>
      <Header />
      <hr className="mb-2 " />
      <Navbar />
      <Outlet></Outlet>
      <Footer />
    </div>
  );
};

export default Main;
