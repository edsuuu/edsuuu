import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Navbar = styled.nav`
    width: 100%;
    background-color: #11111a;

    /* background-color: transparent; */
    /* backdrop-filter: blur(20px); */
    padding: 20px;
    border-bottom: 1px solid #ffffff53;
    .hamburguer {
        color: white;
        display: none;
        border: 1px solid white;
        height: 35px;
    }
    .links {
        display: flex;
        flex-direction: row;
        gap: 50px;
        color: white;
    }
    .buttons {
        display: flex;
        flex-direction: row;
        gap: 30px;
    }

    @media (max-width: 768px) {
        .buttons {
            display: none;
        }
        .links {
            display: none;
        }
        .hamburguer {
            display: block;
        }
    }
`;

export const LinksLista = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 6px 40px;

    .titles-nav {
        color: white;
    }
    @media (max-width: 768px) {
        padding: 6px 20px;
    }
`;

export const LinkStyled = styled(Link)`
    box-sizing: border-box;
    text-decoration: none;
    color: #ffffff;
    font-weight: bold;
    transition: 0.5s;
    &:hover {
        background-color: #4267ce;
        padding: 10px;
        border-radius: 10px;
    }
`;

export const Title = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
`;

export const LinkTitle = styled(Link)`
    display: flex;
    flex-direction: row;
    gap: 10px;
`;

export const Container = styled.div`
    .responsive-back {
        position: absolute;
        z-index: 2;
        width: 100vw;
        height: 90vh;
        backdrop-filter: blur(20px);
        .responsive-links {
            margin-top: 30px;
            display: flex;
            flex-direction: column;
            gap: 20px;
            border: 1px solid black;
            .links-div {
                background-color: gray;
                border: 1px solid black;
                display: flex;
                justify-content: center;
                a {
                    text-align: center;
                    width: 100%;
                    color: #11111a;
                    background-color: #00a4ef;
                    padding: 10px;
                }
            }
        }
    }
`;
