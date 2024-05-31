import FormularioContato from '../../Components/FormularioContato';
import RedesSociais from '../../Components/RedesSociais';
import { Container, Content } from './styled';

const Contact = () => {
    return (
        <>
            <Container>
                <Content>
                    <FormularioContato />
                    <RedesSociais />
                </Content>
            </Container>
        </>
    );
};

export default Contact;
