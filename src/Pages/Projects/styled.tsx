import styled from 'styled-components';

export const Container = styled.div`
    max-width: 1300px;
    min-width: 320px;
    padding: 40px 0px;
    color: white;
    margin: 0px auto 0px auto;
`;

export const ProjetosContainer = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));

    .projetoss {
        width: 1200px;
        text-align: center;
        margin: 3rem auto;
    }
`;

export const ButtonCategory = styled.button<{ $active: boolean }>`
    background-color: ${(props) => (props.$active ? 'blue' : 'white')};
    color: ${(props) => (props.$active ? 'white' : 'black')};
    border: 1px solid ${(props) => (props.$active ? 'blue' : 'black')};
    padding: 10px 20px;
    border-radius: 5px;
    font-size: 1.05rem;
    cursor: pointer;
    transition: background-color 0.5s ease;

    &:hover {
        background-color: ${(props) => (props.$active ? 'darkblue' : '#230094')};
        color: #ffffff;
    }
    &:focus {
        outline: scale(0.98);
    }
    &:active {
        transform: scale(0.95);
    }
`;

export const Title = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    div:nth-child(1) {
        padding-top: 20px;
    }
    input {
        color: #ffffff;
        width: 100%;
        max-width: 600px;
        width: 100%;
        min-width: 100px;
        padding: 15px;
        border-radius: 5px;
        border: 1px solid white;
        background-color: transparent;
        backdrop-filter: blur(10px);
        font-size: 1.2rem;
    }
    .input-projects {
        padding: 15px;
        max-width: 600px;
        width: 100%;
        min-width: 320px;

        input[type='search'].dark {
            color: #fff;
        }

        input[type='search']::-webkit-search-cancel-button {
            -webkit-appearance: none;
            height: 1em;
            width: 1em;
            color: #fff;
            background: url(https://pro.fontawesome.com/releases/v5.10.0/svgs/solid/times-circle.svg) no-repeat 50% 50%;
            /* background-size: contain; */
            /* opacity: 0; */
            /* pointer-events: none; */
        }
        input[type='search']:focus::-webkit-search-cancel-button {
            opacity: 0.8;
            pointer-events: all;
        }

        input[type='search'].dark::-webkit-search-cancel-button {
            filter: invert(1);
        }
    }

    .content-buttons {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 5px;
    }
    .main-titles {
        font-size: 1.3rem;
        text-align: center;
    }
`;
