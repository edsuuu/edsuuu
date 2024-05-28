import FormularioContato from '../../Components/FormularioContato';
import RedesSociais from '../../Components/RedesSociais';
import { Container, MainContact } from './styled';

const Contact = () => {
    return (
        <Container>
            <MainContact>
                {/* <h1>
                    <span>&lt;</span> Contato <span>&gt;</span>
                </h1>
                    <p>
                        formulario de preenchimento e redes
                    </p>
                <h1>
                    <span>&lt;</span> Contato / <span>&gt;</span>
                </h1> */}

                <FormularioContato />

                {/* Redes Sociais */}
                <RedesSociais />
            </MainContact>
        </Container>
    );
};

export default Contact;
