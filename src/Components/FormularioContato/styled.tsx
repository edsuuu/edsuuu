import styled from 'styled-components';

export const FormMainContact = styled.div`
    max-width: 1100px;
    width: 100%;
    @media (max-width: 540px) {
        margin-top: 1rem;
    }
`;
export const TitleFormContact = styled.div`
    margin-bottom: 20px;
    color: white;

    h1 {
        font-size: 2.2rem;
    }

    p {
        font-size: 1.1rem;
    }
    span {
        color: #00a4ef;
    }

    abbr {
        margin: 0px 5px;
        text-decoration: none;
    }

    a {
        text-decoration: none;
        color: #00efef;
        &:hover {
            text-decoration: underline;
            cursor: pointer;
        }
    }
`;

export const FormContact = styled.form`
    display: flex;
    flex-direction: column;
`;

export const InputGroup = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    gap: 20px;

    @media (max-width: 540px) {
        flex-wrap: wrap;
        gap: 0px;
    }
`;

export const FormsContactGroup = styled.div`
    width: 100%;
    position: relative;

    input {
        font-size: 1.1rem;
        display: flex;
        flex: 1 1 100%;
        width: 100%;
        height: 50px;
        padding: 10px 15px;
        background-color: #11111a;
        margin-bottom: 20px;

        /* background: transparent; */
        /* backdrop-filter: blur(10px); */
        color: #ffffff;
        border: 1px solid #ffffff5f;
        border-radius: 4px;
        box-sizing: border-box;

        &:focus {
            outline: none;
            ~ label {
                top: -10px;
                font-size: 1.1rem;
                background: #11111a;
            }
        }

        &:not(:placeholder-shown) ~ label {
            top: -8px;
            font-size: 13px;
        }
    }

    label {
        color: #ffffff;
        font-size: 1rem;
        position: absolute;
        pointer-events: none;
        left: 15px;
        top: 15px;
        padding: 0 5px;
        border-radius: 10px;
        transition: 0.2s ease all;
        -moz-transition: 0.2s ease all;
        -webkit-transition: 0.2s ease all;
    }

    textarea {
        /* backdrop-filter: blur(10px); */
        background-color: #11111a;

        font-size: 1.05rem;
        max-width: 1100px;
        margin-bottom: 5px;

        width: 100%;
        display: flex;
        flex: 1 1 100%;
        height: 350px;
        padding: 20px;
        /* background: transparent; */

        border: 1px solid #ffffff5f;
        border-radius: 4px;
        box-sizing: border-box;
        resize: none;
        color: white;

        &:focus {
            outline: none;
            ~ label {
                top: -11px;
                font-size: 1.1rem;
                background: #11111a;
            }
        }

        &:not(:placeholder-shown) ~ label {
            top: -8px;
            font-size: 13px;
        }
    }
`;

export const MensagemAndButton = styled.div`
    display: flex;
    flex-direction: column;
    small {
        margin-left: 5px;

        color: white;
    }
    @media (max-width: 540px) {
        small {
            margin-bottom: 0.5rem;
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
        font-size: 20px;
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
        transform: translateX(1.2em) rotate(45deg) scale(1.1);
    }

    .btn-send-message:hover span {
        transform: translateX(5em);
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
