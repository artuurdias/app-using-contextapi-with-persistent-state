import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: #000;
    font-size: 16px;
    font-family: Roboto;
  }

  html, border-style, #root {
    max-height: 100vh;
    max-width: 100vw;
    width: 100%;
    height: 100%;
  }

  html {
    font-family: 'Source Sans Pro', sans-serif;
    background: #222;
  }
`;