import { Link } from 'react-router-dom';
import { Container } from './styled';

export default function Error404() {
    return (
        <Container>
            <h1>pagina nao existe</h1>
            <Link to={'/'}>Voltar</Link>
        </Container>
    );
}
