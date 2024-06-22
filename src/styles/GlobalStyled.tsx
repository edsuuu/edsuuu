import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
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
