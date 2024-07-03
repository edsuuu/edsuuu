import styled from 'styled-components';

export const Title = styled.div`
    text-align: center;
    margin-bottom: 20px;
    span {
        color: #00a4ef;
    }
`;

export const InformacoesTecnicas = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 5px;

    h2 {
        color: #00a4ef;
    }
    @media (max-width: 996px) {
        flex-wrap: wrap;
        .card-infos {
            width: 100%;
        }
    }
    .content-icons {
        margin-top: 15px;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        gap: 20px;
    }

    .card-infos {
        border-radius: 20px;
        padding: 25px;
        margin: 10px;
        width: 100%;
        border: 1px solid #ffffff5c;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 15px;
        text-align: center;
        transition: 0.3s;

        p {
            padding: 0 15px;
        }
        &:hover {
            transform: scale(1.05);
        }
    }
`;
