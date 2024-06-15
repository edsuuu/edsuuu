import styled from 'styled-components';

export const Container = styled.div`
    .loading-screen {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        font-size: 24px;
        font-weight: bold;
    }

    .card-container {
        padding: 16px;
        display: grid;
        gap: 20px;
        grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    }

    .repo-card {
        background-color: #fff;
        border: 1px solid #ccc;
        border-radius: 8px;
        padding: 16px;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        transition: transform 0.3s;
    }

    .repo-card:hover {
        transform: translateY(-5px);
    }

    .repo-image {
        width: 100%;
        height: 150px;
        object-fit: cover;
        border-radius: 8px 8px 0 0;
    }

    .repo-card h2 {
        margin: 16px 0 8px;
        font-size: 1.5em;
    }

    .repo-card p {
        font-size: 1em;
        color: #666;
    }
`;
