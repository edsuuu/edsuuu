import { Link } from "react-router-dom";
import styled from "styled-components";

export const Navbar = styled.nav`
    width: 100%;
    background-color: #02060E;
`;

export const LinksLista = styled.ul`
    display: flex;
    align-items: center;
    gap: 30px;
    width: auto;
    padding: 6px 40px;
    list-style: none;
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
