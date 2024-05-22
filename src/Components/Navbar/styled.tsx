import { Link } from "react-router-dom";
import styled from "styled-components";

export const Navbar = styled.nav`
    position: absolute;
    width: 100%;
    display: flex;
    margin-top: 20px;
    justify-content: center;
`;

export const LinksLista = styled.ul`
    border: 1px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;
    width: auto;
    padding: 12px 30px;
    list-style: none;
    border-radius: 20px;
`;

export const LinkStyled = styled(Link)`
    box-sizing: border-box;
    text-decoration: none;
    color: #000;
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
