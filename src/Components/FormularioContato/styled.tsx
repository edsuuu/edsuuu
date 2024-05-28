import styled from 'styled-components';

export const FormMainContact = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    border: 1px solid black;
`;
export const FormContact = styled.form`
    display: flex;
    flex-direction: column;
    max-width: 700px;
`;

export const NameAndEmailInput = styled.div`
    display: flex;
    flex-direction: row;
    gap: 2rem;
    margin-bottom: 1rem;
`;

export const NameInput = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0px 0px 0px 0px;
    input {
        padding: 10px;
    }
`;
export const EmailInput = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0px 0px 0px 0px;
    input {
        padding: 10px;
    }
`;

export const MensageAndButton = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

export const MensageInput = styled.div`
    display: flex;
    flex-direction: column;
    input {
        width: 300px;
        height: 300px;
    }
    textarea {
        width: 600px;
        height: 300px;
        padding: 10px;
        font-size: 16px;
        border: 1px solid #ccc;
        border-radius: 5px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        resize: none; /* Impede a alteração do tamanho */
    }
`;
export const ButtonInput = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    button {
        padding: 10px;
        background-color: #4CAF50;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
    }
`;
