import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Nanum+Gothic+Coding:wght@400;700&display=swap');
  // Reset CSS
  body, div, section {
    margin: 0;
    padding: 0;
  }

  h1, h2, h3, h4, h5 {
    margin: 0;
    font-size: unset;
    font-weight: unset;
  }

  button {
    border: none;
    background-color: transparent;
    cursor: pointer;
  }

  input {
    border: none;
    outline: none;
    background-color: unset;
  }
  p{
    margin: 0;
    
  }

  // Typography
  :root {
    --main-bg-color: ${({ theme }) => theme.backColor};
    --sub-bg-color: ${({ theme }) => theme.color};
    --main-font-color: ${({ theme }) => theme.color};

    --border-radius: 0.5rem;
    --border-error: #e84118;
    
    
    // todo button color
    --todo-update-btn-color: #fbc531;
    --todo-update-btn-color-hover: #e1b12c;
    --todo-complete-btn-color: #4cd137;
    --todo-complete-btn-color-hover: #44bd32;
    --todo-delete-btn-color: #e84118;
    --todo-delete-btn-color-hover: #c23616;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-family: 'Nanum Gothic Coding', monospace;
    width: 100vw;
    background-color: var(--main-bg-color);
    color: var(--main-font-color);
    transition: all 0.2s ease-in;
  }

  #root {
    display: flex;
  }

  // Contents
`;
