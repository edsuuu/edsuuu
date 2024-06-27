import styled from 'styled-components';

export const FormMainContact = styled.div`
    max-width: 800px;
    width: 100%;
`;
export const TitleFormContact = styled.div`
    margin-bottom: 20px;
    color: white;

    h1 {
        font-size: 2.2rem;
    }

    p {
        font-size: 1.1rem;
    }
`;

export const FormContact = styled.form`
    display: flex;
    flex-direction: column;
`;

export const InputGroup = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    gap: 20px;

    @media (max-width: 540px) {
        flex-wrap: wrap;
        gap: 0px;
    }
`;

export const FormsContactGroup = styled.div`
    width: 100%;
    position: relative;
    margin-bottom: 20px;

    input {
        font-size: 1.1rem;
        display: flex;
        flex: 1 1 100%;
        width: 100%;
        height: 50px;
        padding: 10px 15px;
        background-color: #11111a;

        /* background: transparent; */
        /* backdrop-filter: blur(10px); */
        color: #ffffff;
        border: 1px solid #ffffff5f;
        border-radius: 4px;
        box-sizing: border-box;

        &:focus {
            outline: none;
            ~ label {
                top: -10px;
                font-size: 1.1rem;
                background: #11111a;
            }
        }

        &:not(:placeholder-shown) ~ label {
            top: -8px;
            font-size: 13px;
        }
    }

    label {
        color: #ffffff;
        font-size: 1rem;
        position: absolute;
        pointer-events: none;
        left: 15px;
        top: 15px;
        padding: 0 5px;
        border-radius: 10px;
        transition: 0.2s ease all;
        -moz-transition: 0.2s ease all;
        -webkit-transition: 0.2s ease all;
    }

    textarea {
        /* backdrop-filter: blur(10px); */
        background-color: #11111a;

        font-size: 1.05rem;
        max-width: 800px;
        width: 100%;
        display: flex;
        flex: 1 1 100%;
        height: 350px;
        padding: 20px;
        /* background: transparent; */

        border: 1px solid #ffffff5f;
        border-radius: 4px;
        box-sizing: border-box;
        resize: none;
        color: white;

        &:focus {
            outline: none;
            ~ label {
                top: -11px;
                font-size: 1.1rem;
                background: #11111a;
            }
        }

        &:not(:placeholder-shown) ~ label {
            top: -8px;
            font-size: 13px;
        }
    }
`;

export const MensageAndButton = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
`;

export const Button = styled.button`
    padding: 15px 20px;
    width: 100px;
    margin: 0 auto;
    border-radius: 10px;
    border: none;
    transition: 0.2s;
    &:hover {
        cursor: pointer;
        background-color: #3d85d8;
    }
`;
