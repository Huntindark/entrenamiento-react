import React, { useState } from "react";
import PropTypes from "prop-types";

export const ThemeContext = React.createContext(); // line A - creating the context

const ThemeStore = ({ children }) => {
  const [theme, setTheme] = useState("light"); // line B - setting the initial theme

  const switchTheme = (theme) => setTheme(theme); // line C - changing the theme

  return (
    <ThemeContext.Provider value={{ switchTheme, theme }}>
      {children}
    </ThemeContext.Provider>
  );
};

ThemeStore.propTypes = {
  children: PropTypes.node,
};

ThemeStore.defaultProps = {
  children: null,
};

export default ThemeStore;
