import styled from 'styled-components';

export const Redes = styled.div`
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: auto;
    width: 250px;
    ul {
    }

    li {
        list-style: none;
    }

    @media (max-width: 768px) {
        flex-direction: row;
        width: 100%;

        a {
            display: flex;
            flex-direction: row;
        }
    }
`;
