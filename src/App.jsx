import React from "react";
import Header from "./layout/Header";
import Main from "./layout/Main";
import styled from "styled-components";

const Container = styled.div`
  max-width: 120rem;
  min-width: 80rem;
  width: 100%;
  margin: 0 auto;
  //box-shadow: inset 0 0 20px red;
`;

function App() {
  return (
    <Container>
      <Header />
      <Main />
    </Container>
  );
}

export default App;
