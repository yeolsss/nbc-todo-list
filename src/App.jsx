import React, { useState } from "react";
import Header from "./layout/Header";
import Main from "./layout/Main";
import styled, { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import store from "./store";
import { GlobalStyle } from "./GlobalStyle";
import { themes } from "./theme";
import ThemeButton from "./components/ThemeButton";

const Container = styled.div`
  max-width: 120rem;
  min-width: 80rem;
  width: 100%;
  margin: 0 auto;
  padding-bottom: 10rem;
`;

function App() {
  const [themeName, setThemeName] = useState("light");

  return (
    <Provider store={store}>
      <ThemeProvider theme={themes[themeName]}>
        <GlobalStyle />
        <Container>
          <ThemeButton themeObj={{ themeName, setThemeName }} />
          <Header />
          <Main />
        </Container>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
