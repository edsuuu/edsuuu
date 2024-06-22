import { useState } from 'react';
import { ButtonCategory, Container, ProjetosContainer, Title } from './styled';
import { projectsObj } from './data';
import CardRepository from '../../Components/CardRepository';

const Project = () => {
    const [category, setCategory] = useState<string | null>(null);
    const [buscarProjeto, setBuscarProjeto] = useState('');

    const handleFilterCategoryClick = (selectedCategory: string) => {
        setCategory((prevCategory) => (prevCategory === selectedCategory ? null : selectedCategory));
    };

    const pesquisarProjeto = (event: React.ChangeEvent<HTMLInputElement>) => {
        setBuscarProjeto(event.target.value);
        if (category) {
            setCategory(null);
        }
    };

    const projetosFiltrados = projectsObj.filter((project) => {
        const categoryMatch = category ? project.categories?.includes(category) : true;
        const pesquisaPeloNome = project.name.toLowerCase().includes(buscarProjeto.toLowerCase());
        return categoryMatch && pesquisaPeloNome;
    });

    return (
        <Container>
            <Title>
                <div className="main-titles">
                    <h1>Quais projetos você deseja ver ?</h1>
                </div>
                <div className="content-buttons">
                    <ButtonCategory $active={category === 'null'} onClick={() => setCategory(null)}>
                        Todos
                    </ButtonCategory>
                    <ButtonCategory $active={category === 'build'} onClick={() => handleFilterCategoryClick('build')}>
                        Em Desenvolvimento
                    </ButtonCategory>
                    <ButtonCategory $active={category === 'front'} onClick={() => handleFilterCategoryClick('front')}>
                        Front-End
                    </ButtonCategory>
                    <ButtonCategory $active={category === 'backend'} onClick={() => handleFilterCategoryClick('backend')}>
                        Back-End
                    </ButtonCategory>
                    <ButtonCategory $active={category === 'fullstack'} onClick={() => handleFilterCategoryClick('fullstack')}>
                        FullStack
                    </ButtonCategory>
                </div>
                <div className="input-projects">
                    <input type="search" className="dark" placeholder="Buscar projeto por nome..." value={buscarProjeto} onChange={pesquisarProjeto} />
                </div>
            </Title>

            <ProjetosContainer>
                {projetosFiltrados && projetosFiltrados.length > 0 ? (
                    projetosFiltrados.map((item, index) => <CardRepository key={index} name={item.name} descricao={item.descricao} githubURL={item.githubURL} imageURL={item.imageURL} />)
                ) : (
                    <div className="projetoss">
                        <h1>Nenhum projeto encontrado</h1>
                    </div>
                )}
            </ProjetosContainer>
        </Container>
    );
};

export default Project;
