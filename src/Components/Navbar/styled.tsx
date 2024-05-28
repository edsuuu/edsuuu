import { Link } from "react-router-dom";
import styled from "styled-components";

export const Navbar = styled.nav`
    position: fixed;
    display: flex;
    justify-content: center;
    width: 100%;
`;

export const LinksLista = styled.ul`
    margin-top: 30px;
    border: 0.5px solid #bebebe;
    background-color: #02060E;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;
    width: auto;
    padding: 6px 40px;
    list-style: none;
    border-radius: 20px;
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
