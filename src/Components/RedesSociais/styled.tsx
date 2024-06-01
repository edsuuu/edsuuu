import styled from 'styled-components';

export const Redes = styled.div`
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 5px;
    max-width: 350px;
    width: 100%;
    height: fit-content;
    flex: 1 1 250px;
    margin-bottom: 242px;
    
    div {
        border: 1px solid black;
    }

    a {
        text-decoration: none;
        color: #fff;
        display: flex;
        align-items: center;
        flex-direction: row;
        justify-content: start;
        padding: 10px 20px;
        gap: 10px;
        &:hover {
            background-color: #f0f0f053;
        }
    }

    @media (max-width: 768px) {
        flex-direction: row;
        justify-content: space-between;
        max-width: 100%;
        margin-bottom: 0px;

        div {
            width: 100%;
            min-width: 100px;


        }
        // Ocultar o texto a 420px e deixar apenas o icone no responsivo
    }
`;
