import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Navbar = styled.nav`
    width: 100%;
    background-color: transparent;
    backdrop-filter: blur(20px);
    padding: 20px;
    border-bottom: 1px solid #ffffff53;

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
`;

export const LinkStyled = styled(Link)`
    box-sizing: border-box;
    text-decoration: none;
    color: #ffffff;
    font-weight: bold;
    transition: 0.3s;
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
