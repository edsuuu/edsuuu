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
                <div className="titles-nav">
                    <h1>Edsu dev</h1>
                </div>

                <div className="links">
                    {rotas.map((rota, index) => (
                        <div key={index}>
                            <LinkStyled to={rota.to}>{rota.name}</LinkStyled>
                        </div>
                    ))}
                </div>

                {/* <div className="buttons">
                    <form>
                        <select name="theme">
                            <option value="Dark-Mode">Dark-Mode</option>
                            <option value="Light-Mode">Light-Mode</option>
                        </select>
                    </form>
                    <form>
                        <select name="language">
                            <option value="PT-BR">PT-BR</option>
                            <option value="EN-US">EN-US</option>
                        </select>
                    </form>
                </div> */}
            </LinksLista>
        </Navbar>
    );
};

export default Navigation;
