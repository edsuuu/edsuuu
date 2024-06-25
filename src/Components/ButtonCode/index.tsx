import React from 'react';
import { ButtonContainer } from './styled';

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
