import React, { useState } from 'react';
import { FormContact, InputGroup, FormsContactGroup, Button, MensageAndButton, FormMainContact, TitleFormContact } from './styled';
import { toast } from 'react-toastify';
import { isEmail } from 'validator';
import API_URL from '../../services';

const FormularioContato: React.FC = () => {
    const [name, setNome] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [message, setMensagem] = useState<string>('');

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        let formErrors = false;

        if (name.trim() === '') {
            formErrors = true;
            toast.error('Nome não pode ficar vazio.');
        }

        if (!isEmail(email)) {
            formErrors = true;
            toast.error('Email inválido');
        }
        if (message.trim() === '') {
            formErrors = true;
            toast.error('Mensagem não pode ficar vazio.');
        }

        if (formErrors) return;

        // mandar o payload para o backend, Nome, email e Mensagem
        try {
            await API_URL.post('/email', { name, email, message });
            toast.success('Email enviado com sucesso!');

            // await axios.post(`/contas/`, {
            //     dono_conta,
            //     login_conta,
            //     senha_conta,
            // });
        } catch (error) {
            console.log(error);
            toast.error('Ocorreu um erro ao enviar o email. Tente novamente mais tarde.');
        }
    };

    return (
        <FormMainContact>
            <TitleFormContact>
                <h1>Contato</h1>
                <p>Entre em contato comigo utilizando o formulário abaixo ou através das minhas principais redes ao lado.</p>
            </TitleFormContact>

            <FormContact onSubmit={handleSubmit}>
                <InputGroup>
                    <FormsContactGroup>
                        <input type="text" placeholder=" " value={name} onChange={(e) => setNome(e.target.value)} />
                        <label>Nome</label>
                    </FormsContactGroup>
                    <FormsContactGroup>
                        <input type="email" placeholder=" " value={email} onChange={(e) => setEmail(e.target.value)} />
                        <label>E-Mail</label>
                    </FormsContactGroup>
                </InputGroup>
                <MensageAndButton>
                    <FormsContactGroup>
                        <textarea placeholder=" " value={message} onChange={(e) => setMensagem(e.target.value)}></textarea>
                        <label>Digite sua mensagem...</label>
                    </FormsContactGroup>
                    <Button type="submit">Enviar</Button>
                </MensageAndButton>
            </FormContact>
        </FormMainContact>
    );
};

export default FormularioContato;
