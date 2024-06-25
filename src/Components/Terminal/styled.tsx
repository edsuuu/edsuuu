import { Link } from 'react-router-dom';
import styled from 'styled-components';

const theme = {
    colorsTerminal: {
        Abaterminal: '#4e4e4e',
        backgroundTerminal: '#000000',
        textTerminal: '#fafafa',
    },
};

export const PowerShell = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap');
    width: 90%;
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
    padding: 13px;
    color: white;
    height: 92.2%;
    font-family: 'Space Mono', monospace;

    div:nth-child(1) {
    }
    div:nth-child(2) {
        display: flex;
        flex-direction: row;
        gap: 10px;
    }
`;

export const ContainerButtonProjectPSW = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid white;
    color: white;
`;

export const LinkStyled = styled(Link)`
    color: #fff;
    line-height: 2;
    position: relative;
    padding-right: 4px;
    &:hover {
        text-decoration: underline;
    }
    &::before {
        content: '';
        width: 6px;
        height: 6px;
        border-top: solid 2px #fff;
        border-right: solid 2px #fff;
        border-radius: 2px;
        position: absolute;
        top: 50%;
        left: 100%;
        transform: translateY(-50%) rotate(45deg);
        transition: transform 0.4s;
    }
    &:hover::before {
        transform: translateY(-50%) rotate(45deg) scale(1.2);
    }
`;
