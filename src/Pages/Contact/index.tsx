import React from 'react';
import FormularioContato from '../../Components/FormularioContato';
import RedesSociais from '../../Components/RedesSociais';
import { Container, Content } from './styled';

const Contact: React.FC = () => {
    return (
        <Container>
            <Content>
                <FormularioContato />
                <RedesSociais />
            </Content>
        </Container>
    );
};

export default Contact;
