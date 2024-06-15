import styled from 'styled-components';

export const FormMainContact = styled.div`
    max-width: 800px;
    width: 100%;
`;
export const TitleFormContact = styled.div`
    padding: 10px;
    margin-bottom: 20px;

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
        background: transparent;

        /* background: gray; */
        color: #000000;
        border: 1px solid #000000;
        border-radius: 4px;
        box-sizing: border-box;

        &:focus {
            outline: none;
            ~ label {
                top: -10px;
                font-size: 1.1rem;
                background: white;
                /* background: gray; */
            }
        }

        &:not(:placeholder-shown) ~ label {
            top: -8px;
            font-size: 13px;
        }
    }

    label {
        color: #000000;
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
        font-size: 1.05rem;
        max-width: 800px;
        width: 100%;
        display: flex;
        flex: 1 1 100%;
        height: 350px;
        padding: 20px;
        background: transparent;

        /* background: gray; */
        border: 1px solid #000000;
        border-radius: 4px;
        box-sizing: border-box;
        resize: none;
        color: white;

        &:focus {
            outline: none;
            ~ label {
                top: -11px;
                font-size: 1.1rem;
                /* background-color: gray;
                 */
                background: white;

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
    transition: .2s;
    &:hover {
        cursor: pointer;
        background-color: #3d85d8;
    }
`;
