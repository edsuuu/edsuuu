import React, { useState } from 'react';
import { FormContact, InputGroup, FormsContactGroup, MensagemAndButton, FormMainContact, TitleFormContact, ButtonContainerSend } from './styled';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { isEmail } from 'validator';
import API_URL from '../../services';
import { ReturnBackend } from '../../interfaces';

const FormularioContato: React.FC = () => {
    const [name, setNome] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [assunto, setAssunto] = useState<string>('');
    const [message, setMensagem] = useState<string>('');
    const [caracteres, setDiminuiCaracteres] = useState<number>(2500);

    const manutecao = false;

    function clearInputs() {
        setNome('');
        setEmail('');
        setAssunto('');
        setMensagem('');
        setDiminuiCaracteres(2500);
    }

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        let formErrors = false;

        if (manutecao)
            return toast.error('Não está funcionando, ainda estamos em Desenvolvimento', {
                position: 'top-center',
                theme: 'colored',
            });

        if (name.trim() === '') {
            formErrors = true;
            toast.error('Nome não pode ficar vazio.', { theme: 'colored' });
        }

        if (!isEmail(email)) {
            formErrors = true;
            toast.error('Email inválido', { theme: 'colored' });
        }
        if (assunto.trim() === '') {
            formErrors = true;
            toast.error('Assunto não pode ficar vazio.', { theme: 'colored' });
        }

        if (message.trim() === '') {
            formErrors = true;
            toast.error('Mensagem não pode ficar vazio.', { theme: 'colored' });
        }
        if (message.length > 2500) {
            formErrors = true;
            toast.error('Mensagem não ultrapassar 2500 Caracteres.', { theme: 'colored' });
        }

        if (formErrors) return;

        const sendEmail = async () => {
            try {
                const response = await API_URL.post('/email', { name, email, message, assunto });

                const data = response.data as ReturnBackend;

                if (data.statusCodeSaveMessage === 201) {
                    toast.success(data.messageSave, {
                        position: 'top-center',
                        theme: 'colored',
                    });
                }

                if (data.statusCodeSendEmail === 535) {
                    toast.warn('Ocorreu um erro, Por Favor Entre em contato com o Administrador', {
                        position: 'top-center',
                        theme: 'colored',
                    });
                    return;
                }
            } catch (error) {
                console.log('err', error);
            }
        };
        toast.promise(
            sendEmail().then(clearInputs),
            {
                pending: 'Enviando email...',
                success: 'Email enviado com sucesso!',
                error: 'Ocorreu um erro ao enviar o email. Tente novamente mais tarde.',
            },
            {
                position: 'top-center',
                theme: 'colored',
            },
        );
    };

    const valueAndContagem = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const newMessage = e.target.value;
        if (newMessage.length <= 2500) {
            setMensagem(newMessage);
            setDiminuiCaracteres(2500 - newMessage.length);
        }
    };

    const myEmail = import.meta.env.VITE_USER_MAIL;

    const copiarEmail = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        navigator.clipboard.writeText(myEmail);
        toast.success('Email copiado com sucesso!', { theme: 'dark' });
    };

    const handleLinkedin = async (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        toast.info('Você será redirecionado dentro de alguns segundos', { theme: 'dark' });

        setTimeout(() => {
            window.open('https://www.linkedin.com/in/edsonlima343/', '_blank');
        }, 3000);
    };

    return (
        <FormMainContact>
            <TitleFormContact>
                <h1>
                    # <span>Contato</span>
                </h1>
                <p>Entre em contato comigo utilizando o formulário abaixo</p>
                <p>
                    Ou se preferir, você pode me encontrar nos link ao lado
                    <abbr title="Copiar o Email">
                        <a href="" onClick={copiarEmail}>
                            Copiar Email
                        </a>
                    </abbr>
                    ou
                    <abbr title="Abrir Linkedin">
                        <a href="" onClick={handleLinkedin}>
                            Acessar Linkedin
                        </a>
                    </abbr>
                </p>
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
                <InputGroup>
                    <FormsContactGroup>
                        <input type="text" placeholder=" " value={assunto} onChange={(e) => setAssunto(e.target.value)} />
                        <label>Assunto</label>
                    </FormsContactGroup>
                </InputGroup>

                <MensagemAndButton>
                    <FormsContactGroup>
                        <textarea placeholder=" " value={message} onChange={valueAndContagem}></textarea>
                        <label>Digite sua mensagem...</label>
                    </FormsContactGroup>
                    <small> Caracteres restantes {caracteres}</small>
                    <ButtonContainerSend>
                        <button className="btn-send-message">
                            <div className="svg-wrapper-1">
                                <div className="svg-wrapper">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                        <path fill="none" d="M0 0h24v24H0z"></path>
                                        <path
                                            fill="currentColor"
                                            d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                                        ></path>
                                    </svg>
                                </div>
                            </div>
                            <span>Enviar</span>
                        </button>
                    </ButtonContainerSend>
                </MensagemAndButton>
            </FormContact>
        </FormMainContact>
    );
};

export default FormularioContato;
