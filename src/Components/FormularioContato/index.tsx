import React from 'react';
import { FormContact, InputGroup, FormsContactGroup, Button, MensageAndButton, FormMainContact, TitleFormContact } from './styled';
import { handleSubmitForms } from '../../services/send_email';

const FormularioContato: React.FC = () => {
    return (
        <FormMainContact>
            <TitleFormContact>
                <h1>Contato</h1>
                <p>Entre em contato comigo utilizando o formulário abaixo ou através das minhas principais redes ao lado.</p>
            </TitleFormContact>
            <FormContact onSubmit={handleSubmitForms}>
                <InputGroup>
                    <FormsContactGroup>
                        <input type="text" placeholder=" " />
                        <label>Nome</label>
                    </FormsContactGroup>
                    <FormsContactGroup>
                        <input type="email" placeholder=" " />
                        <label>E-Mail</label>
                    </FormsContactGroup>
                </InputGroup>
                <MensageAndButton>
                    <FormsContactGroup>
                        <textarea placeholder=" "></textarea>
                        <label>Digite sua mensagem...</label>
                    </FormsContactGroup>
                    <Button type="submit">Enviar</Button>
                </MensageAndButton>
            </FormContact>
        </FormMainContact>
    );
};

export default FormularioContato;
