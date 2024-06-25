import React from 'react';
import { Container } from './styled';
import { ButtonTextProps } from '../../interfaces';

const ButtonHacking: React.FC<ButtonTextProps> = ({ text, onClick }) => {
    return (
        <Container>
            <button className="ui-btn" onClick={onClick}>
                <span>{text}</span>
            </button>
        </Container>
    );
};

export default ButtonHacking;
