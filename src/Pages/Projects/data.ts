export interface ProjectsObjProps {
    id: number;
    name: string;
    descricao: string;
    categories?: string[];
}

export const projectsObj: ProjectsObjProps[] = [
    { id: 1, name: 'Meu Portfolio', descricao: '', categories: ['front'] },
    { id: 2, name: 'Hydra Landing Page', descricao: 'Uma breve pagina', categories: ['front'] },
    { id: 3, name: 'Coffe Shop ', descricao: 'Projeto agenda mvc', categories: ['front'] },
    { id: 4, name: 'NFT Landing Page', descricao: 'Uma breve pagina', categories: ['front'] },
    { id: 5, name: 'Pomodoro App', descricao: 'Pomodoro', categories: ['front'] },
    { id: 6, name: 'Blog', descricao: 'blog com api externa strapi', categories: ['front', 'fullstack'] },
    { id: 7, name: 'Agenda MVC ', descricao: 'Projeto agenda mvc', categories: ['fullstack', 'backend'] },
    { id: 8, name: 'Fronnt Api Escola', descricao: 'Uma api que cadastra alunos com fotos', categories: ['fullstack', 'front'] },
    { id: 9, name: 'Api Escola', descricao: 'Uma api que cadastra alunos com fotos', categories: ['fullstack', 'backend'] },
    { id: 10, name: 'Api Carros', descricao: 'Uma api que cadastra carros', categories: ['backend'] },
    { id: 11, name: 'Api Valorant', descricao: 'Projeto agenda mvc', categories: ['build', 'backend'] },
    { id: 12, name: 'Front Api Valorant', descricao: 'Uma api que cadastra alunos com fotos', categories: ['build', 'frontend'] },
];
