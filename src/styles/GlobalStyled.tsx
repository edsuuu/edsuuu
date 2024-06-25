import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

export const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
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
    z-index: 0; /* Para garantir que está no fundo */
}

.content-container {
    position: relative;
    z-index: 1; /* Para garantir que está acima dos particles */
}

`;
