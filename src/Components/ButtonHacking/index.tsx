import React from 'react';
import { Container } from './styled';
import { ButtonHackingProps } from '../../interfaces';

const ButtonHacking: React.FC<ButtonHackingProps> = ({ text }) => {
    return (
        <Container>
            <button className="ui-btn">
                <span>{text}</span>
            </button>
        </Container>
    );
};

export default ButtonHacking;
