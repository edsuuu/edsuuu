import React from 'react';
import styled from 'styled-components';

interface Props {
    name: string;
    descricao: string;
    githubURL?: string;
    imageURL: string;
}

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    gap: 16px;
    padding: 16px;

    .card {
        /* backdrop-filter: blur(16px); */
        width: 100%;
        border: 1px solid #dddddd3c;
        border-radius: 8px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        display: flex;
        flex-direction: column;
        transition: transform 0.3s ease;
        &:hover {
            border: 1px solid #ddd;
            transform: scale(1.04);
        }
    }

    .card img {
        border-radius: 8px 8px 0px 0px;
        width: 100%;
        height: 300px;
        display: block;
    }

    .card-content {
        /* text-align: center; */
        padding: 16px;
        display: flex;
        flex-direction: column;
        flex: 1;
    }

    .card-title {
        font-size: 1.25em;
        margin: 0 0 8px;
    }

    .card-description {
        font-size: 1em;
        margin: 0 0 16px;
    }

    .card-buttons {
        display: flex;
        gap: 8px;
        justify-content: center;
    }

    @media (max-width: 768px) {
        .card {
            flex: 1 1 100%;
        }
    }
`;

const CardRepository: React.FC<Props> = ({ name, descricao, githubURL, imageURL }) => {
    return (
        <Container>
            <div className="card">
                <img src={imageURL} alt="simple image" />

                <div className="card-content">
                    <h2 className="card-title">{name}</h2>
                    <p className="card-description">{descricao}</p>
                    <a href={githubURL} target="_blank" rel="noopener noreferrer">
                        Repositorio
                    </a>
                </div>
            </div>
        </Container>
    );
};
export default CardRepository;
