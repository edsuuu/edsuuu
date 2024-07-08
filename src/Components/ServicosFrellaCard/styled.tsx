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
        .card-frella {
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

    .card-frella {
        border-radius: 20px;
        padding: 25px;
        margin: 10px;
        width: 100%;
        border: 1px solid #ffffff3c;
        /* box-shadow: 0 0 10px rgba(255, 255, 255, 0.2); */

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

export const ButtonContainerSend = styled.div`
    margin: auto;
    width: 90%;
    display: flex;
    justify-content: center;
    .btn-send-message {
        font-family: inherit;
        font-size: 1rem;
        background: #00a4ef;
        color: #11111a;
        padding: 0.7em 1em;
        padding-left: 0.9em;
        display: flex;
        align-items: center;
        border: none;
        border-radius: 16px;
        overflow: hidden;
        transition: all 0.2s;
        cursor: pointer;
    }

    .btn-send-message span {
        display: block;
        margin-left: 0.3em;
        transition: all 0.3s ease-in-out;
    }

    .btn-send-message svg {
        display: block;
        transform-origin: center center;
        transition: transform 0.3s ease-in-out;
    }

    .btn-send-message:hover .svg-wrapper {
        animation: fly-1 0.6s ease-in-out infinite alternate;
    }

    .btn-send-message:hover svg {
        transform: translateX(3em) rotate(45deg) scale(1.1);
    }

    .btn-send-message:hover span {
        transform: translateX(7em);
    }

    .btn-send-message:active {
        transform: scale(0.95);
    }

    @keyframes fly-1 {
        from {
            transform: translateY(0.1em);
        }

        to {
            transform: translateY(-0.1em);
        }
    }
`;
