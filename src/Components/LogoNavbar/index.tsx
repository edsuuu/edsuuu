import { Link } from 'react-router-dom';
import { CodeBy, NavbarBrandContainer, TextContainer, TitleOne, TitleTwo } from './styled';
import React from 'react';

const LogoNavbar: React.FC = () => {
    return (
        <NavbarBrandContainer>
            <Link to={'/'}>
                <TextContainer>
                    <CodeBy>Code by</CodeBy>
                    <TitleOne>Edson</TitleOne>
                    <TitleTwo>Lima</TitleTwo>
                </TextContainer>
            </Link>
        </NavbarBrandContainer>
    );
};

export default LogoNavbar;
