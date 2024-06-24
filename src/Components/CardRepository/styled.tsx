import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    gap: 16px;
    /* margin-bottom: 16px; */
    padding: 10px;
    border-radius: 8px;
    transition: transform 0.3s ease;
    backdrop-filter: blur(16px);
`;

export const Card = styled.div`
    width: 100%;
    border: 1px solid #dddddd3c;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    padding: 5px 2px 20px 0px;
    transition: transform 0.3s ease;
    &:hover {
        border: 1px solid #ddd;
        transform: scale(1.04);
        filter: brightness(1.1); /* Ajuste o valor conforme necessário */
    }
    img {
        height: 200px;
        border: 1px solid #787777;
        border-radius: 10px;
        margin: 5px 7px;
    }
`;

export const CardContent = styled.div`
    /* text-align: center; */
    padding: 16px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    flex: 1;
    text-align: center;

    h1 {
        /* font-size: 1.25em; */
        margin: 0 0 8px;
        z-index: 3;
    }
    p {
        padding: 5px;
        text-align: center;
        font-size: 1em;
        /* margin: 0 0 16px; */
    }

    @media (max-width: 768px) {
        flex: 1 1 100%;
    }
`;

export const IconsContainer = styled.div`
    margin: 10px 0px;
`;
