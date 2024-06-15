import styled from 'styled-components';

export const Container = styled.div`
    max-width: 1400px;
    min-width: 320px;
    border: 1px solid #000;
    margin: 0px auto 0px auto;

    .repositorios {
        display: grid;
        gap: 20px;
        grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    }

`;
