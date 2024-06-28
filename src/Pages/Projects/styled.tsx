import styled from 'styled-components';
import { DiSass, DiReact } from 'react-icons/di';
import { RiJavascriptFill } from 'react-icons/ri';
import { TbBrandCss3 } from 'react-icons/tb';
import { TiHtml5 } from 'react-icons/ti';
import { BiLogoRedux, BiLogoTypescript } from 'react-icons/bi';
import { SiStyledcomponents } from 'react-icons/si';
import { FaNode } from 'react-icons/fa';
import { GrMysql } from 'react-icons/gr';
import { BiLogoMongodb } from 'react-icons/bi';

export const Container = styled.div`
    max-width: 1300px;
    min-width: 320px;
    padding: 40px 0px;
    color: white;
    margin: 0px auto 0px auto;
    .loadMore {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;
    }
`;

export const ProjetosContainer = styled.div`
    max-width: 1200px;
    margin: 2rem auto;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    gap: 10px;
    scroll-behavior: smooth;
    .projetoss {
        text-align: center;
        grid-column: span 3;
        @media (max-width: 768px) {
            grid-column: span 1;
        }
    }
`;

export const ButtonCategory = styled.button<{ $active: boolean }>`
    background-color: ${(props) => (props.$active ? '#4267ce' : 'white')};
    color: ${(props) => (props.$active ? 'white' : 'black')};
    border: 1px solid ${(props) => (props.$active ? 'blue' : 'black')};
    padding: 10px 20px;
    border-radius: 5px;
    font-size: 1.05rem;
    cursor: pointer;
    transition: background-color 0.5s ease;

    &:hover {
        background-color: ${(props) => (props.$active ? 'darkblue' : '#0083bf')};
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
        border: 1px solid #ffffff;
        background-color: transparent;
        /* backdrop-filter: blur(10px); */
        background-color: #11111a;

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

export const StyledDiSass = styled(DiSass)`
    color: #ff69b4;
    font-size: 40px;
`;

export const StyledDiReact = styled(DiReact)`
    color: #61dafb;
    font-size: 40px;
`;

export const StyledRiJavascriptFill = styled(RiJavascriptFill)`
    color: #f0db4f;
    font-size: 40px;
`;

export const StyledTbBrandCss3 = styled(TbBrandCss3)`
    color: #1572b6;
    font-size: 40px;
`;

export const StyledTiHtml5 = styled(TiHtml5)`
    color: #e34f26;
    font-size: 40px;
`;

export const StyledBiLogoRedux = styled(BiLogoRedux)`
    color: #764abc;
    font-size: 40px;
`;

export const StyledBiLogoTypescript = styled(BiLogoTypescript)`
    color: #3178c6;
    font-size: 40px;
`;

export const StyledSiStyledcomponents = styled(SiStyledcomponents)`
    color: #db7093;
    font-size: 40px;
`;

export const StyledFaNode = styled(FaNode)`
    color: #68a063;
    font-size: 40px;
`;

export const StyledGrMysql = styled(GrMysql)`
    color: #4479a1;
    font-size: 40px;
`;

export const StyledBiLogoMongodb = styled(BiLogoMongodb)`
    color: #13aa52;
    font-size: 40px;
`;

export const ButtonContacts = styled.div`
    width: 80%;
    display: flex;
    margin: 0 auto;
    justify-content: center;
    gap: 20px;
    margin-top: 20px;

    button {
        --b: 3px;
        /* border thickness */
        --s: 0.45em;
        --color: #e2e2e2;
        font-weight: bold;
        padding: calc(0.5em + var(--s)) calc(0.9em + var(--s));
        color: var(--color);
        --_p: var(--s);
        background: conic-gradient(from 90deg at var(--b) var(--b), #0000 90deg, var(--color) 0) var(--_p) var(--_p) / calc(100% - var(--b) - 2 * var(--_p)) calc(100% - var(--b) - 2 * var(--_p));
        transition:
            0.3s linear,
            color 0s,
            background-color 0s;
        outline: var(--b) solid #0000;
        outline-offset: 0.6em;
        font-size: 16px;
        border: 0;
        user-select: none;
        -webkit-user-select: none;
        touch-action: manipulation;
        transition: 0.3s;
    }

    button:hover,
    button:focus-visible {
        --_p: 0px;
        outline-color: #ffffff;
        outline-offset: 0.05em;
    }

    button:active {
        background: #ffffff;
        color: #000000;
    }
`;
