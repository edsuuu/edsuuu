import React, { useState } from 'react';
import { FormContact, InputGroup, FormsContactGroup, Button, MensageAndButton, FormMainContact, TitleFormContact } from './styled';
import { toast } from 'react-toastify';
import { isEmail } from 'validator';
import API_URL from '../../services';

const FormularioContato: React.FC = () => {
    const [name, setNome] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [assunto, setAssunto] = useState<string>('');
    const [message, setMensagem] = useState<string>('');

    const manutecao = true;

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        let formErrors = false;

        if (manutecao) return toast.error('Não está funcionando, ainda estamos em Desenvolvimento', { theme: 'dark', position: 'top-right' });

        if (name.trim() === '') {
            formErrors = true;
            toast.error('Nome não pode ficar vazio.');
        }

        if (!isEmail(email)) {
            formErrors = true;
            toast.error('Email inválido');
        }
        if (assunto.trim() === '') {
            formErrors = true;
            toast.error('Assunto não pode ficar vazio.');
        }

        if (message.trim() === '') {
            formErrors = true;
            toast.error('Mensagem não pode ficar vazio.');
        }

        if (formErrors) return;

        console.log(formErrors);
        // mandar o payload para o backend, Nome, email e Mensagem
        try {
            await API_URL.post('/email', { name, email, message, assunto });
            console.log(name, email, message, assunto);
            toast.success('Email enviado com sucesso!', { theme: 'dark' });
        } catch (error) {
            console.log(error);
            toast.error('Ocorreu um erro ao enviar o email. Tente novamente mais tarde.', { theme: 'dark' });
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
                        <input type="text" placeholder=" " value={assunto} onChange={(e) => setAssunto(e.target.value)} />
                        <label>Assunto</label>
                    </FormsContactGroup>
                </InputGroup>
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
