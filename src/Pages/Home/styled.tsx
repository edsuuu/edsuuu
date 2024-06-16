import styled from 'styled-components';

export const Container = styled.div`
    z-index: 1;
    max-width: 1440px;
    min-width: 320px;
    height: 90vh;
    margin: 0px auto 0px auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
`;

export const TitleHome = styled.div`
    text-align: center;
    margin-bottom: 30px;
    h1 {
        font-size: 2rem;
    }
`;
export const LinksSociais = styled.div`
    display: flex;
    flex-direction: row;
    gap: 30px;
    h3 {
        border: 1px solid black;
        padding: 10px;
    }
`;

export const ButtonsNextPage = styled.div`
    margin-top: 30px;
    display: flex;
    justify-content: center;
    gap: 10px;
`;
