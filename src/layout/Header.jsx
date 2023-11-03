import React from "react";
import styled from "styled-components";

const HeaderSection = styled.header`
  margin: 10rem 0;
  > h1 {
    font-size: 10rem;
    text-align: center;
    font-weight: bold;
  }
`;

function Header() {
  return (
    <HeaderSection>
      <h1>ToDo</h1>
    </HeaderSection>
  );
}

export default Header;
