import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../pages/Shared/Footer";
import Navbar from "../pages/Shared/Navbar";
import Header from "../pages/Home/Header/Header";

const Main = () => {
  const location = useLocation()
  console.log(location);
  const isLoginLocation = location.pathname.includes('/login') || location.pathname.includes('/signup')
  return (
    <div>
      {isLoginLocation ||  <><Header /> 
     
     <hr/>
     <Navbar /> </> }
      <hr/>
      <Outlet></Outlet>
      {isLoginLocation ||  <Footer /> }
     
    </div>
  );
};

export default Main;
