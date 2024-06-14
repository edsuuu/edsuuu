import { Navbar, LinksLista, LinkStyled } from './styled';

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
                <div>
                    <span>
                        <span>edsu</span>
                        <span>dev</span>
                    </span>
                </div>

                {rotas.map((rota, index) => (
                    <li key={index}>
                        <LinkStyled to={rota.to}>{rota.name}</LinkStyled>
                    </li>
                ))}
                <div>
                    <p>pt/en</p>
                    <p>light mode</p>
                </div>
            </LinksLista>
        </Navbar>
    );
};

export default Navigation;
