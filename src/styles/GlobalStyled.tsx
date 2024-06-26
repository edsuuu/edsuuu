import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

export const GlobalStyle = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Poppins", sans-serif;
}

*::selection {
  background-color: #00a4ef;
  color: #000000;
}

::-webkit-scrollbar {
  height: 0.2rem;
  width: 0.6rem;
}

::-webkit-scrollbar-track {
    /* border: 1px solid #98989866; */
    border-top: none;
    border-bottom: none;
}

::-webkit-scrollbar-thumb {
  background-color: #00a4ef;
}

body {
    background: #11111a;
    /* 00a4ef */
    /* background-color: #555555; */
}

.particles-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
}

.content-container {
    position: relative;
    z-index: 1;
}

`;
