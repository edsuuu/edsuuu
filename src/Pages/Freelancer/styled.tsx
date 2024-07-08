import styled from 'styled-components';

export const Container = styled.div`
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    max-width: 1600px;
    margin: 0 auto;

    .servicos {
        background: #11111a;
        margin-top: 2rem;
        border-radius: 20px;
        box-shadow: 0 0 10px rgba(255, 255, 255, 0.2);
        gap: 10px;
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        flex-wrap: wrap;
        align-items: center;
        gap: 20px;
        padding: 2rem;
    }

    @media (max-width: 768px) {
        .servicos {
            flex-wrap: wrap;
            padding: 20px;
        }
    }
`;
