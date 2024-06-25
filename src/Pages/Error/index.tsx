import { Link } from 'react-router-dom';
import { Container } from './styled';
import React from 'react';

const Error404: React.FC = () => {
    return (
        <Container>
            <h1>pagina nao existe</h1>
            <Link to={'/'}>Voltar</Link>
        </Container>
    );
};
export default Error404;
