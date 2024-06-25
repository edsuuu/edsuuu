import { Navbar, LinksLista, LinkStyled } from './styled';
import { LogoNav } from './LogoNav';

interface NavProps {
    className?: string;
}

// eslint-disable-next-line react/prop-types
const Navigation: React.FC<NavProps> = ({ className }) => {
    const rotas = [
        { name: 'Home', to: '/' },
        { name: 'Sobre', to: '/sobre' },
        { name: 'Projetos', to: '/projetos' },
        { name: 'Contato', to: '/contato' },
    ];

    return (
        <Navbar className={className}>
            <LinksLista>
                <div className="links">
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
