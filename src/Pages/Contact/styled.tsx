import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1440px;
    margin: auto;
    height: 90vh;
`;

export const Content = styled.div`
    width: 100%;
    padding: 45px;
    /* border: 1px solid #ffffff; */
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    gap: 5rem;
    /* background-color: #1E2021; */
    border-radius: 10px;

    @media (max-width: 1024px) {
        margin: 0px 30px 0px 30px;
    }
    @media (max-width: 768px) {
        flex-wrap: wrap;
        padding: 20px;
    }
`;
