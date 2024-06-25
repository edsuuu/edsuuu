import React from 'react';
import { Container } from './styled';
import { ButtonProps } from '../../interfaces';

const ButtonHacking: React.FC<ButtonProps> = ({ text }) => {
    return (
        <Container>
            <button className="ui-btn">
                <span>{text}</span>
            </button>
        </Container>
    );
};

export default ButtonHacking;
