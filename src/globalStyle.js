import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  body{
    font-family: 'Roboto', sans-serif;
    background: black;
    color: #333333;
    font-size: 16px;
  }
`;
