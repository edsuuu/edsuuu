import React from 'react';
import LogoNavbar from '../LogoNavbar';
import { Navbar, LinksLista, LinkStyled } from './styled';

interface RotasProps {
    name: string;
    to: string;
}

const rotas: RotasProps[] = [
    { name: 'Home', to: '/' },
    { name: 'Sobre', to: '/sobre' },
    { name: 'Projetos', to: '/projetos' },
    { name: 'Contato', to: '/contato' },
];

const Navigation: React.FC = () => {
    return (
        <Navbar>
            <LinksLista>
                <LogoNavbar />
                <div className="links">
                    {rotas.map((rota, index) => (
                        <div key={index}>
                            <LinkStyled to={rota.to}>{rota.name}</LinkStyled>
                        </div>
                    ))}
                </div>
            </LinksLista>
        </Navbar>
    );
};

export default Navigation;
