import { Navbar, LinksLista, LinkStyled } from './styled';
import { LogoNav } from './LogoNav';

const Navigation = () => {
    const rotas = [
        { name: 'Home', to: '/' },
        { name: 'Sobre', to: '/sobre' },
        { name: 'Projetos', to: '/projetos' },
        { name: 'Contato', to: '/contato' },
    ];

    return (
        <Navbar>
            <LinksLista>
                <div className="titles-nav">
                    <LogoNav />
                </div>

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
