import styled from 'styled-components';

export const Container = styled.div`
    max-width: 1300px;
    min-width: 320px;
    border: 1px solid #ffffff;
    color: white;
    margin: 0px auto 0px auto;
`;

export const ProjetosContainer = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
`;

export const ButtonCategory = styled.button<{ $active: boolean }>`
    background-color: ${(props) => (props.$active ? 'blue' : 'white')};
    color: ${(props) => (props.$active ? 'white' : 'black')};
    border: 1px solid ${(props) => (props.$active ? 'blue' : 'black')};
    padding: 8px 16px;
    margin: 4px;
    cursor: pointer;

    &:hover {
        background-color: ${(props) => (props.$active ? 'darkblue' : '#230094')};
        color: #ffffff;
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
`;
