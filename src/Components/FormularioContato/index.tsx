import { FormContact, FormMainContact } from "./styled";

export default function FormularioContato() {
    return (
        <FormMainContact>
            <h1>Contato</h1>
            <p>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</p>
            <FormContact id="form" className="form">
                <h2>Faça seu cadastro</h2>

                <div className="form-fields">
                    <label htmlFor="username">Seu usuário</label>
                    <input type="text" name="username" className="username" id="username" placeholder="Seu usuário" />
                    <span className="error-message">Campo inválido por algum motivo qualquer</span>
                </div>

                <div className="form-fields">
                    <label htmlFor="email">Seu e-mail</label>
                    <input type="email" name="email" className="email" id="email" placeholder="Seu e-mail" />
                    <span className="error-message">Campo inválido por algum motivo qualquer</span>
                </div>

                <div className="form-fields">
                    <label htmlFor="username">Sua senha</label>
                    <input type="password" name="password" className="password" id="password" placeholder="Sua senha" />
                    <span className="error-message">Campo inválido por algum motivo qualquer</span>
                </div>

                <div className="form-fields">
                    <label htmlFor="username">Repetir senha</label>
                    <input type="password" name="password2" className="password2" id="password2" placeholder="Repetir senha" />
                    <span className="error-message">Campo inválido por algum motivo qualquer</span>
                </div>

                <div className="form-fields">
                    <button type="submit">Enviar</button>
                </div>
            </FormContact>
        </FormMainContact>
    );
}
