import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    `;

export const Content = styled.div`
    width: 1200px;
    padding: 45px;
    border: 1px solid red;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    gap: 20px;
    /* background-color: #1E2021; */
    border-radius: 10px;

    @media (max-width: 768px) {
        flex-wrap: wrap;
        padding: 20px;
    }
`;


