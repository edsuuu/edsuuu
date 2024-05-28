import { FormContact, NameAndEmailInput, NameInput, EmailInput, MensageInput, ButtonInput, MensageAndButton } from './styled';

export default function FormularioContato() {
    return (
        <FormContact id="form" className="form">
            <div>
                <h1>Contato</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur, omnis!</p>
            </div>
            <NameAndEmailInput>
                <NameInput>
                    <label htmlFor="username">Seu Nome</label>
                    <input type="text" name="username" className="username" id="username" placeholder="Seu usuário" />
                    <span className="error-message">Campo inválido por algum motivo qualquer</span>
                </NameInput>
                <EmailInput>
                    <label htmlFor="email">Seu e-mail</label>
                    <input type="email" name="email" className="email" id="email" placeholder="Seu e-mail" />
                    <span className="error-message">Campo inválido por algum motivo qualquer</span>
                </EmailInput>
            </NameAndEmailInput>
            <MensageAndButton>
                <MensageInput>
                    <label htmlFor="mensage">Sua Mensagem</label>
                    {/* <input type="text" name="mensage" className="mensage" id="mensage" placeholder="Sua Mensagem" /> */}
                    <textarea className="message-input" placeholder="Digite sua mensagem aqui..."></textarea>
                    <span className="error-message">Campo inválido por algum motivo qualquer</span>
                </MensageInput>
                <ButtonInput>
                    <button type="submit">Enviar</button>
                </ButtonInput>
            </MensageAndButton>
        </FormContact>
    );
}
