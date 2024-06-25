import React from 'react';
import { ButtonContainer } from './styled';
import { ButtonTextProps } from '../../interfaces';

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
