import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html, body {
    font-family: 'Inter', sans-serif;
    background-color: #fff;
    color: #333;
    height: 100%;
  }

  button {
    cursor: pointer;
    border: none;
    background: none;
  }
`;
