import { Container, Introduction } from './styled';

const Home = () => {
    return (
        <Container>
            <Introduction>
                <h1>Desenvolvedor FullStack</h1>
                <br />
                <br />
                <h1>Principais redes, linkedin, gmail e github</h1>

                <a href="/contato">contact me</a>
            </Introduction>
        </Container>
    );
};

export default Home;
