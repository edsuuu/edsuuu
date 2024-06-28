import React, { useState } from 'react';
import { ButtonCategory, ButtonContacts, Container, ProjetosContainer, Title } from './styled';
import { projectsObj } from './data';
import CardRepository from '../../Components/CardRepository';

const Project: React.FC = () => {
    const [category, setCategory] = useState<string | null>(null);
    const [buscarProjeto, setBuscarProjeto] = useState('');
    const [visibleProjects, setVisibleProjects] = useState(6);

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

    const projetosVisiveis = projetosFiltrados.slice(0, visibleProjects);

    const handleLoadMoreRepository = () => {
        setVisibleProjects((prevVisibleProjects) => prevVisibleProjects + 6);
    };

    return (
        <Container>
            <Title>
                <div className="main-titles">
                    <h1>Quais projetos você deseja ver ?</h1>
                </div>
                <div className="content-buttons">
                    <ButtonCategory $active={category === null} onClick={() => setCategory(null)}>
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
                {projetosVisiveis && projetosVisiveis.length > 0 ? (
                    projetosVisiveis.map((item, index) => (
                        <CardRepository
                            key={index}
                            name={item.name}
                            categories={item.categories}
                            descricao={item.descricao}
                            githubURL={item.githubURL}
                            imageURL={item.imageURL}
                            tecnologias={item.tecnologias}
                            icons={item.icons}
                            deployURL={item.deployURL}
                            deploy={item.deploy}
                        />
                    ))
                ) : (
                    <div className="projetoss">
                        <h1>Nenhum projeto encontrado</h1>
                    </div>
                )}
            </ProjetosContainer>
            <div className="loadMore">
                {visibleProjects < projetosFiltrados.length && (
                    <ButtonContacts>
                        <button onClick={handleLoadMoreRepository}>Carregar mais posts </button>
                    </ButtonContacts>
                )}
            </div>
        </Container>
    );
};

export default Project;
