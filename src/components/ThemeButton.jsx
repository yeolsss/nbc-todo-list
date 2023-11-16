import React from "react";

function ThemeButton({ themeObj }) {
  const { themeName, setThemeName } = themeObj;

  const handleThemeClick = () => {
    setThemeName(themeName === "light" ? "dark" : "light");
  };
  return <button onClick={handleThemeClick}>theme Toggle</button>;
}

export default ThemeButton;
