import { useNavigate } from 'react-router-dom';
import { Container } from './styled';
import React from 'react';

const Error404: React.FC = () => {
    const navigate = useNavigate();

    const handleNavigation = () => {
        navigate('/');
    };

    return (
        <Container>
            <h1>Error 404</h1>
            <h1>A página solicitada não existe ou não foi encontrada!</h1>
            <div className="button" onClick={handleNavigation}>
                <span className="text">Voltar para a página inicial</span>
                <span className="arrow"></span>
            </div>
        </Container>
    );
};

export default Error404;
