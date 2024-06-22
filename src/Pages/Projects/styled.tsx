import styled from 'styled-components';

export const Container = styled.div`
    max-width: 1300px;
    min-width: 320px;
    border: 1px solid #ffffff;
    color: white;
    margin: 0px auto 0px auto;

    .repositorios {
        display: grid;
        gap: 20px;
        grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    }
`;

export const ProjetosContainer = styled.div`
    display: flex;
    flex: 1;
    justify-content: space-evenly;
    flex-wrap: wrap;
    gap: 30px;

    div {
        width: 600px;
        height: 500px;
        border: 1px solid #ffffff;
        &:hover {
            background-color: #23009444;
            cursor: pointer;
            transform: scale(1.05);
        }
    }
`;

export const ButtonCategory = styled.button<{ active: boolean }>`
    background-color: ${(props) => (props.active ? 'blue' : 'white')};
    color: ${(props) => (props.active ? 'white' : 'black')};
    border: 1px solid ${(props) => (props.active ? 'blue' : 'black')};
    padding: 8px 16px;
    margin: 4px;
    cursor: pointer;

    &:hover {
        background-color: ${(props) => (props.active ? 'darkblue' : '#230094')};
        color: #ffffff;
    }
`;

export const Title = styled.div``;
