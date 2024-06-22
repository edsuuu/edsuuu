import { useState } from 'react';
import { ButtonCategory, Container, ProjetosContainer, Title } from './styled';
import { projectsObj } from './data';
import { useNavigate } from 'react-router-dom';

const Project = () => {
    const navigate = useNavigate();
    const [category, setCategory] = useState<string | null>(null);
    const [buscarProjeto, setBuscarProjeto] = useState('');

    const handleFilterCategoryClick = (selectedCategory: string) => {
        setCategory((prevCategory) => (prevCategory === selectedCategory ? null : selectedCategory));
    };

    const pesquisarProjeto = (event: React.ChangeEvent<HTMLInputElement>) => {
        setBuscarProjeto(event.target.value);
    };

    const projetosFiltrados = projectsObj.filter((project) => {
        const categoryMatch = category ? project.categories?.includes(category) : true;
        const pesquisaPeloNome = project.name.toLowerCase().includes(buscarProjeto.toLowerCase());
        return categoryMatch && pesquisaPeloNome;
    });

    const handleIndexTest = (item: { id: number; name: string; descricao: string; categories?: string[] }) => {
        console.log('Clicou', item.id);
        navigate(`/projeto/${item.id}`);
    };

    return (
        <Container>
            <Title>
                <div>
                    <h1>Quais Projetos Você deseja ver</h1>
                </div>
                <div>
                    <ButtonCategory active={category === 'front'} onClick={() => handleFilterCategoryClick('front')}>
                        Front-End
                    </ButtonCategory>
                    <ButtonCategory active={category === 'backend'} onClick={() => handleFilterCategoryClick('backend')}>
                        Back-End
                    </ButtonCategory>
                    <ButtonCategory active={category === 'fullstack'} onClick={() => handleFilterCategoryClick('fullstack')}>
                        FullStack
                    </ButtonCategory>
                    <ButtonCategory active={category === 'build'} onClick={() => handleFilterCategoryClick('build')}>
                        Em Construção
                    </ButtonCategory>
                </div>
                <input type="text" placeholder="Buscar por nome..." value={buscarProjeto} onChange={pesquisarProjeto} />
            </Title>

            <div className="favorites-projects">
                <div>
                    <h1>Projetos</h1>
                </div>
                <ProjetosContainer>
                    {projetosFiltrados.map((item) => (
                        <div key={item.id} onClick={() => handleIndexTest(item)}>
                            <h3>{item.name}</h3>
                            <p>{item.descricao}</p>
                        </div>
                    ))}
                </ProjetosContainer>
            </div>
        </Container>
    );
};

export default Project;
