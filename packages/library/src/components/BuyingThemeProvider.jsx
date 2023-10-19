import React from "react";

import { createContext, useContext, useState } from "react";

const BuyingThemeContext = createContext({ isDarkMode: false, toggleTheme: () => undefined });

const useBuyingTheme = () => {
  const context = useContext(BuyingThemeContext);
  if (!context) throw new Error("useBuyingTheme must be used within a BuyingThemeProvider");
  return context;
};

const BuyingThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => void setIsDarkMode((prev) => !prev);

  return (
    <BuyingThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </BuyingThemeContext.Provider>
  );
}

export { BuyingThemeProvider, BuyingThemeContext, useBuyingTheme };
