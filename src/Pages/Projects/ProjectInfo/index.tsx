// import { Container } from './styled';
// import { Link, useParams } from 'react-router-dom';
// import { projectsObj, ProjectsObjProps } from '../data';
// import { useEffect, useState } from 'react';

// export default function ProjectInfo() {
//     const { id } = useParams<{ id: string }>();
//     const [projeto, setProjeto] = useState<ProjectsObjProps | null>(null);

//     useEffect(() => {
//         const findProjectById = (id: string) => {
//             const project = projectsObj.find((project) => project.id === Number(id));
//             setProjeto(project || null);
//         };

//         if (id) {
//             findProjectById(id);
//         }
//     }, [id]);

//     return (
//         <Container>
//             <h1>
//                 Mais informações do projeto <Link to="/projetos">voltar </Link>
//             </h1>

//             <h1>O Id é {id}</h1>

//             {projeto ? (
//                 <div>
//                     <h2>Nome do projeto: {projeto.name}</h2>
//                     <p>Descrição: {projeto.descricao}</p>
//                     {projeto.categories && <p>Categorias: {projeto.categories.join(', ')}</p>}
//                 </div>
//             ) : (
//                 <h1>Projeto não Existe</h1>
//             )}
//         </Container>
//     );
// }
