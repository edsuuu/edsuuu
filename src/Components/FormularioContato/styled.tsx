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
        font-size: 12px;
        display: flex;
        flex: 1 1 100%;
        width: 100%;
        height: 36px;
        padding: 0 20px;
        background: #2c2b2b;
        color: #323840;
        border: 1px solid #3d85d8;
        border-radius: 4px;
        box-sizing: border-box;

        &:focus {
            outline: none;
            ~ label {
                top: -8px;
                font-size: 13px;
                /* background: #ddd8d8; */
            }
        }

        &:not(:placeholder-shown) ~ label {
            top: -8px;
            font-size: 13px;
        }
    }

    label {
        color: #ffffff;
        font-size: 13px;
        font-weight: normal;
        position: absolute;
        pointer-events: none;
        left: 15px;
        top: 11px;
        padding: 0 5px;
        border-radius: 10px;
        transition: 0.2s ease all;
        -moz-transition: 0.2s ease all;
        -webkit-transition: 0.2s ease all;
    }

    textarea {
        font-size: 12px;
        max-width: 800px;
        width: 100%;
        display: flex;
        flex: 1 1 100%;
        height: 350px;
        padding: 20px;
        background: #2c2b2b;
        border: 1px solid #3d85d8;
        border-radius: 4px;
        box-sizing: border-box;

        &:focus {
            outline: none;
            ~ label {
                top: -8px;
                font-size: 13px;
                /* background: #ddd8d8; */
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

export const Button = styled.button``;
