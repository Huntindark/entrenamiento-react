import React, { useContext } from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { ThemeContext } from "./contexts/ThemeStore";
import PropTypes from "prop-types";

const themes = {
  dark: {
    primary: "#fbfbfb",
    secondary: "#5a6d93",
    background: "#293A5C",
  },
  light: {
    primary: "#293A5C",
    secondary: "#fbfbfb",
    background: "#dedede",
  },
};

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }
  * {
    transition: all 1s;
  }
`;

const Theme = ({ children }) => {
  const { theme } = useContext(ThemeContext); // get the current theme ('light' or 'dark')
  return (
    <ThemeProvider theme={themes[theme]}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};

Theme.propTypes = {
  children: PropTypes.node,
};

Theme.defaultProps = {
  children: null,
};

export default Theme;
