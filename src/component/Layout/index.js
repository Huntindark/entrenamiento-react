/*----- Core -----*/
import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Content from "./Content";
import { BrowserRouter as Router } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Content />
        <Footer />
      </Router>
    </>
  );
};

export default Layout;
