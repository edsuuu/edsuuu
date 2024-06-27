import styled from 'styled-components';

export const InformacoesTecnicas = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 10px;
    border: 1px solid white;

    @media (max-width: 996px) {
        flex-wrap: wrap;
        .card-infos {
            width: 100%;
        }
    }
    .content-icons {
        display: flex;
        flex-direction: row;
        gap: 20px;
    }

    .card-infos {
        padding: 25px;
        margin: 10px;
        width: 100%;
        border: 1px solid white;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 10px;
        text-align: center;
    }
`;

export const Title = styled.div`
    text-align: center;
`;
