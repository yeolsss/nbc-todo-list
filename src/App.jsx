import React from "react";
import Header from "./layout/Header";
import Main from "./layout/Main";
import styled from "styled-components";
import { Provider } from "react-redux";
import store from "./store";

const Container = styled.div`
  max-width: 120rem;
  min-width: 80rem;
  width: 100%;
  margin: 0 auto;
`;

function App() {
  return (
    <Provider store={store}>
      <Container>
        <Header />
        <Main />
      </Container>
    </Provider>
  );
}

export default App;
