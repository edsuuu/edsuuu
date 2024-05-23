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
    max-width: 800px;
    width: 800px;
    max-height: 500px;
    height: 500px;
    max-height: 500px;
    border-radius: 10px;
    background-color: ${theme.colorsTerminal.backgroundTerminal};
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
        padding: 6px 8px 2px 6px;
        transition: 200ms ease-in-out;

        &:hover {
            background-color: #cccbcb47;
        }
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
`;
