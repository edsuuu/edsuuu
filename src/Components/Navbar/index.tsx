import React, { useState, useEffect } from 'react';
import LogoNavbar from '../LogoNavbar';
import { Navbar, LinksLista, LinkStyled, Container } from './styled';
import { RotasNavigationProps } from '../../interfaces';
import { CgMenu } from 'react-icons/cg';
import { IoMdClose } from 'react-icons/io';

const rotas: RotasNavigationProps[] = [
    { name: 'Home', to: '/' },
    { name: 'Sobre', to: '/sobre' },
    { name: 'Projetos', to: '/projetos' },
    { name: 'Contato', to: '/contato' },
    { name: 'Freelancer', to: '/freelancer' },
];

const Navigation: React.FC = () => {
    const [responsiveBackVisible, setResponsiveBackVisible] = useState(false);

    //  para fechar o menu responsivo
    const closeResponsiveBack = () => {
        setResponsiveBackVisible(false);
    };

    const toggleResponsiveBack = () => {
        setResponsiveBackVisible((prevState) => !prevState);
    };
    // para fechar se a tela for maior de 768px
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768) {
                closeResponsiveBack();
            }
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleLinkClick = () => {
        closeResponsiveBack();
    };

    return (
        <Container>
            <Navbar>
                <LinksLista>
                    <LogoNavbar />
                    <div className="links">
                        {rotas.map((rota, index) => (
                            <div key={index}>
                                <LinkStyled to={rota.to} onClick={handleLinkClick}>
                                    {rota.name}
                                </LinkStyled>
                            </div>
                        ))}
                    </div>
                    <div className="hamburguer" onClick={toggleResponsiveBack}>
                        {responsiveBackVisible === false ? <CgMenu size={35} /> : <IoMdClose size={35} />}
                    </div>
                </LinksLista>
            </Navbar>
            {responsiveBackVisible && (
                <div className="responsive-back">
                    <div className="responsive-links">
                        {rotas.map((rota, index) => (
                            <div key={index} className="links-div">
                                <LinkStyled to={rota.to} onClick={handleLinkClick}>
                                    {rota.name}
                                </LinkStyled>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </Container>
    );
};

export default Navigation;
