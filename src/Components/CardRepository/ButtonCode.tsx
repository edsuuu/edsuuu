import React from 'react';
import styled from 'styled-components';

export const ButtonContainer = styled.div`
    .button {
        color: #000000;
        border: 1px solid white;
        border-radius: 4px;
        padding: 0.8em 2em;
        background: #00a4ef;
        transition: 0.2s;
        cursor: pointer;
    }

    .button:hover {
        color: #ffffff;
        transform: translate(0.25rem, -0.25rem);
        background: #0087ef;
        box-shadow: -0.25rem 0.25rem #fafafa;
    }

    .button:active {
        transform: translate(0);
        box-shadow: none;
    }
`;

export const ButtonsLinks = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 1rem;
    margin-top: 10px;
`;

interface ButtonTextProps {
    text: string;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const ButtonCode: React.FC<ButtonTextProps> = ({ text, onClick }) => {
    return (
        <ButtonContainer>
            <button className="button" onClick={onClick}>
                {text}
            </button>
        </ButtonContainer>
    );
};
export default ButtonCode;
