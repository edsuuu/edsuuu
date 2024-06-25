import styled, { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
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

export const ContentNav = styled.div`
    display: flex;
    justify-content: center;
    align-items: center; /* Para centralizar verticalmente */
    flex-direction: column; /* Para que o botão e a navbar fiquem em coluna */

    .menu-drop {
        position: absolute;
    }

    .navbar {
        opacity: 0;
        transition: opacity 0.5s ease; /* Transição suave de 0.5 segundos */
        max-height: 0;
        overflow: hidden;
        transition:
            opacity 0.5s ease,
            max-height 0.5s ease;
    }

    .navbar.show {
        opacity: 1;
        max-height: 70px; /* Altura máxima suficiente para mostrar o conteúdo */
    }
`;
