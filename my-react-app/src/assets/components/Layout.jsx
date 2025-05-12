import React from "react";
import { Outlet, useLocation } from "react-router";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

const Layout = () => {
    const location = useLocation();

    let mainClassName; 
    if (location.pathname === "/signin" || location.pathname === "/user") {
        mainClassName = "signin-background";
    } else {
        mainClassName = "home-background";    
    }
  return (
    <>
      <Header />
          <Outlet />
      <Footer />
    </>  
  );
};

export default Layout;