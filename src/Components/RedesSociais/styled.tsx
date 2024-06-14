import styled from 'styled-components';

export const Redes = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
    max-width: 350px;
    width: 100%;
    height: fit-content;
    flex: 1 1 250px;
    margin-bottom: 90px;

    @media (max-width: 768px) {
        flex-direction: row;
        justify-content: space-evenly;
        max-width: 100%;
        margin-bottom: 0px;
    }
    @media (max-width: 1024px) {
        margin-bottom: 70px;

    }
`;

export const LinksRedes = styled.div`
    border: 0.5px solid #ffffff5f;
    border-radius: 15px;

    a {
        text-decoration: none;
        color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: row;
        font-size: 1.2rem;
        justify-content: start;
        padding: 15px 20px;
        gap: 10px;
        transition: 300ms ease-in-out;
        border-radius: 15px;
    }

    .linkedin {
        &:hover {
            background-color: #3898ec;
        }
    }
    .github {
        &:hover {
            background-color: #000000a2;
        }
    }
    .gmail {
        &:hover {
            background-color: #ff0000a2;
        }
    }

    .discord {
        &:hover {
            background-color: #5865F2;
        }
    }
    @media (max-width: 632px) {
        border-radius: 50%;

        a {
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            width: 60px;
            height: 60px;

            span {
                height: 30px;
            }
            .name-redes-router {
                display: none;
            }
        }
    }
`;
