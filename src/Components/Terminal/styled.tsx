import { Link } from 'react-router-dom';
import styled from 'styled-components';

const theme = {
    colorsTerminal: {
        // Abaterminal: '#4e4e4e',
        Abaterminal: '#005f8b',
        backgroundTerminal: '#11111a',
        textTerminal: '#fafafa',
    },
};

export const PowerShell = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap');
    width: 100%;
    height: auto;
    border-radius: 10px;
    background-color: ${theme.colorsTerminal.backgroundTerminal};
    margin-top: 3rem;

    .container-button-project-psw {
        opacity: 0;
        transition: opacity 0.3s ease;
    }

    .show-content .container-button-project-psw {
        opacity: 1;
    }
`;

export const AbasPowerShell = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border-radius: 10px 10px 0px 0px;
    background-color: ${theme.colorsTerminal.Abaterminal};
`;

export const PwsTabsButtons = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 5px;
    align-items: center;
    margin-top: 3px;
`;

export const PwsNewTabs = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    margin-top: 5px;

    span {
        color: white;
    }
    .plus {
        border-radius: 5px 0px 0px 5px;
        padding: 6px 8px 2px 8px;
        font-size: 13px;
        transition: 200ms ease-in-out;

        &:hover {
            background-color: #cccbcb47;
        }
    }
    .linha {
        margin-bottom: 2px;
        color: #ffffff42;
        cursor: none;
    }
    .seta-bottom {
        border-radius: 0px 5px 5px 0px;
        padding: 6px 8px 2px 8px;
        font-size: 13px;
        transition: 200ms ease-in-out;

        &:hover {
            background-color: #cccbcb47;
        }
    }

    @media (max-width: 450px) {
        display: none;
    }
`;

export const PwsTabs = styled.div`
    border-bottom: 1px solid #00000042;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    color: white;
    width: 186px;
    gap: 5px;
    margin-top: 2px;
    margin-left: 10px;
    background-color: ${theme.colorsTerminal.backgroundTerminal};
    padding: 6px 6px 7px 6px;
    border-radius: 10px 10px 0px 0px;

    //     top right bottom left
    div {
        margin-top: 5px;
        margin-left: 5px;
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 10px;
    }
    .pws-close-tabs {
        display: flex;
        align-items: center;
        border-radius: 3px;
        padding: 3px;
        transition: 200ms ease-in-out;
        &:hover {
            background-color: #cccbcb3b;
        }
    }

    @media (max-width: 450px) {
        .pws-close-tabs {
            display: none;
        }
    }
`;
export const PwsTabsTitle = styled.span`
    font-family: 'Space Mono', monospace;
    font-size: 0.9rem;
`;

export const PwsWindowButtons = styled.div`
    display: flex;
    flex-direction: row;

    span {
        display: flex;
        align-items: center;
        color: white;
    }
    .min {
        padding: 11px 15px;
        transition: 200ms ease-in-out;

        &:hover {
            background-color: #cccbcb6e;
        }
    }
    .max {
        padding: 10px 15px 10px 15px;
        transition: 200ms ease-in-out;

        &:hover {
            background-color: #cccbcb6e;
        }
    }

    @media (max-width: 450px) {
        .max {
            display: none;
        }
    }

    .clos {
        border-radius: 0px 10px 0px 0px;
        padding: 0px 15px 0px 15px;
        transition: 200ms ease-in-out;

        &:hover {
            background-color: #fc0000d3;
            color: white;
        }
        &:active {
            color: #ffffffb5;
        }
    }
`;

export const ContentPSW = styled.div`
    padding: 1rem 1rem 2.5rem 1rem;
    color: white;
    height: 75vh;
    overflow-y: auto;
    font-family: 'Space Mono', monospace;
    /* backdrop-filter: blur(5px); */
    border: 1px solid #ffffff39;
    /* background-color: #11111a; */

    border-top: none;
    border-radius: 0px 0px 10px 10px;
    .comands {
        display: flex;
        flex-direction: row;
        gap: 5px;
        align-items: center;
    }
    @media (max-width: 450px) {
        .write-text {
            font-size: 0.95rem;
        }
    }
`;

export const Skills = styled.div`
    width: 100%;
    header {
        text-align: center;
        margin-bottom: 4rem;
    }

    .languages {
        margin-top: 30px;
        padding: 1rem 5rem 1rem 5rem;
        display: grid;
        align-items: center;
        justify-content: center;
        text-align: center;
        grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
        row-gap: 45px;
        column-gap: 30px;
    }
    .status-github {
        img {
        }
    }
`;
export const ContainerButtonProjectPSW = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 10px;
    /* border: 1px solid white; */
    color: white;
    h2 {
        margin-bottom: 10px;
    }
`;

export const LinkStyled = styled(Link)`
    color: #00a4ef;
    line-height: 2;
    position: relative;
    padding-right: 4px;
    text-decoration: none;
    transition: 0.3s;
    &:hover {
        text-decoration: underline;
        &::before {
            content: '';
            width: 6px;
            height: 6px;
            border-top: solid 2px #00a4ef;
            border-right: solid 2px #00a4ef;
            border-radius: 2px;
            position: absolute;
            top: 50%;
            left: 100%;
            transform: translateY(-50%) rotate(45deg);
            transition: transform 0.4s;
        }
    }

    /* &:hover::before {
        transform: translateY(-50%) rotate(45deg) scale(1.2);
    } */
`;

export const BreveDescricao = styled.div`
    padding: 1.5rem 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h2 {
        text-align: center;
    }
    p {
        padding: 0px 5rem;
        text-align: center;
        margin-bottom: 2rem;
    }
    span {
        color: #00a4ef;
    }
    @media (max-width: 768px) {
        p {
            padding: 0px 1rem;
            text-align: center;
            margin-bottom: 1rem;
        }
    }
`;
export const Curriculo = styled.div`
    padding: 1rem;
    margin-bottom: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    span {
        color: #00a4ef;
    }

    .btns-curriculo {
        display: flex;
        flex-direction: row;
        gap: 10px;
        color: black;
    }

    .btn-download {
        width: 50px;
        height: 50px;
        border: 1px solid #ffffff43;
        border-radius: 50%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        position: relative;
        transition-duration: 0.3s;
        box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.11);
        &:hover {
            background-color: #00a4ef;
        }
    }

    .tooltip {
        position: absolute;
        /* right: 10px; */
        left: 60px;
        opacity: 0;
        background-color: rgb(80, 80, 80);
        color: white;
        padding: 5px 10px;
        border-radius: 5px;
        display: flex;
        align-items: center;
        justify-content: center;
        transition-duration: 0.2s;
        pointer-events: none;
        letter-spacing: 0.5px;
    }

    .tooltip::before {
        position: absolute;
        content: '';
        width: 10px;
        height: 10px;
        background-color: rgb(80, 80, 80);
        background-size: 1000%;
        background-position: center;
        transform: rotate(45deg);
        left: -5%;
        transition-duration: 0.3s;
    }

    .btn-download:hover .tooltip {
        opacity: 1;
        transition-duration: 0.3s;
    }

    .btn-visu {
        width: 50px;
        height: 50px;
        border: 1px solid #ffffff43;
        border-radius: 50%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        position: relative;
        box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.11);

        &:hover {
            background-color: #00a4ef;
        }
    }

    .tooltip-reverse {
        position: absolute;
        /* right: 10px; */
        right: 60px;
        opacity: 0;
        background-color: rgb(80, 80, 80);
        color: white;
        padding: 5px 15px;
        border-radius: 5px;
        display: flex;
        align-items: center;
        justify-content: center;
        transition-duration: 0.2s;
        pointer-events: none;
        letter-spacing: 0.5px;
    }

    .tooltip-reverse::before {
        position: absolute;
        content: '';
        width: 10px;
        height: 10px;
        background-color: rgb(80, 80, 80);
        background-size: 1000%;
        background-position: center;
        transform: rotate(45deg);
        left: 93.6%;
        transition-duration: 0.3s;
    }

    .btn-visu:hover .tooltip-reverse {
        opacity: 1;
        transition-duration: 0.5s;
    }
    .icons-terminal {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        color: #11111a;
    }
`;
