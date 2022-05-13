/*----- Core -----*/
import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Content from "./Content";
import { BrowserRouter as Router } from "react-router-dom";
import StyledLayout from "./style";

const Layout = () => {
  return (
    <StyledLayout>
      <Router>
        <Navbar />
        <Content />
        <Footer />
      </Router>
    </StyledLayout>
  );
};

export default Layout;
