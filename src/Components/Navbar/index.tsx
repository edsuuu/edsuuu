import { Navbar, LinksLista, LinkStyled } from "./styled";

const Navigation = () => {
    const rotas = [
        { name: "Home", to: "/" },
        { name: "Sobre", to: "/sobre" },
        { name: "Projetos", to: "/projetos" },
        { name: "Experiência", to: "/experiencia" },
        { name: "Contato", to: "/contato" },
    ];

    return (
        <Navbar>
            <LinksLista>
                {/* <LinkTitle to={"/"}>
                    <Title>
                        <span className="credit">©</span>
                        <div>
                            <span>code by</span>
                            <span>
                                <span>edsu</span>
                                <span>dev</span>
                            </span>
                        </div>
                    </Title>
                </LinkTitle> */}
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
