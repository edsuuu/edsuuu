import styled from 'styled-components';
import { PDFPopupProps } from '../../interfaces';

export const VisuButton = styled.button`
    padding: 5px;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    width: 150px;
    transition: 0.3s;
    &:hover {
        background-color: #00a4ef;
    }
`;

export const PDFPopup = styled.div<PDFPopupProps>`
    display: ${(props) => (props.open ? 'flex' : 'none')};
    position: fixed;
    top: 0;
    left: 0;
    width: 99vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.8);
    justify-content: center;
    align-items: center;
    z-index: 1000;
`;

export const PDFContainer = styled.div`
    position: relative;
    width: 1400px;
    height: 100vh;
    background-color: white;
    embed {
        width: 100%;
        height: 100%;
        border: none;
    }
`;

export const CloseButton = styled.button`
    position: absolute;
    top: 5%;
    right: 2%;
    background-color: red;
    color: white;
    border: none;
    font-size: 20px;
    padding: 5px 10px;
    cursor: pointer;
    border-radius: 5px;
    transition: 0.3s;
    &:hover {
        background-color: #ff00008e;
    }
`;
