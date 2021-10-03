import { createGlobalStyle } from 'styled-components';
import { colors } from './colors';

export const GlobalStyles = createGlobalStyle`
  :root {
    font-size: 62.5%;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    width: 100vw;
    height: 100vh;
  }

  body, main {
    max-width: 100vw;
    min-height: 100vh;
    font-size: 1.6rem;
    background: ${colors.gray};
    overflow-x: hidden;
    overflow-y: hidden;
  }

  html, body, input, button {
    font-family: -apple-system, BlinkMacSystemFont, 
    'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 
    'Open Sans', 'Helvetica Neue', sans-serif;
  }

  a {
    text-decoration: none;
  }

  ul, li {
    list-style: none;
  }
`;
