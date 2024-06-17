import React, { useEffect, useState } from 'react';
import { Container } from './styled';

interface Post {
    userId: number;
    id: number;
    name?: string;
    title?: string;
    body: string;
}

const CardRepository: React.FC = () => {
    const [repositorios, setRepositorios] = useState<Post[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // const response = await fetch('https://jsonplaceholder.typicode.com/posts');
                const response = await fetch('https://api.github.com/users/edsuuu/repos');
                // gerar uma chave para api https://docs.github.com/rest/overview/resources-in-the-rest-api#rate-limiting
                const data = await response.json();
                setRepositorios(data);
            } catch (e) {
                console.error('Erro ao buscar os dados:', e);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return (
            <div className="loading-screen">
                <p>Loading...</p>
            </div>
        );
    }

    return (
        <Container>
            <div className="card-container">
                {repositorios.map((repositorios) => (
                    <div key={repositorios.id} className="repo-card">
                        <img src={`https://via.placeholder.com/150/0000FF/808080?text=Post+${repositorios.id}`} alt="repo" className="repo-image" />
                        <h2>{repositorios.name}</h2>
                    </div>
                ))}
            </div>
        </Container>
    );
};

export default CardRepository;
