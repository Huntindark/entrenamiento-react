import React from "react";
// import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import Layout from "./component/Layout";
// import Footer from "./component/Layout/Footer";
// import Navbar from "./component/Layout/Navbar";
// import Content from "./component/Layout/Content";
import Theme from "./Theme";
import ThemeStore from "./contexts/ThemeStore";
import APIStore from "./contexts/APIStore";
// import StyledLayout from "./component/Layout/style";

function App() {
  return (
    <>
      <APIStore>
        <ThemeStore>
          <Theme>
            <Layout />
          </Theme>
        </ThemeStore>
      </APIStore>
    </>
  );
}

export default App;
