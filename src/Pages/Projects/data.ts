export interface ProjectsObjProps {
    name: string;
    descricao: string;
    categories?: string[];
    imageURL?: string;
    githubURL?: string;
    tecnologias?: string;
}

export const projectsObj: ProjectsObjProps[] = [
    { name: 'Meu Portfolio', descricao: 'descricao', categories: ['front'], githubURL: 'https://github.com/edsuuu/edsuuu' },
    { name: 'Hydra Landing Page', descricao: 'Uma breve pagina', categories: ['front'], githubURL: 'https://github.com/edsuuu/hydra-landing-page' },
    { name: 'NFT Landing Page', descricao: 'Uma breve pagina', categories: ['front'], githubURL: 'https://github.com/edsuuu/landing-page-nft' },
    { name: 'Coffe Shop ', descricao: 'Projeto agenda mvc', categories: ['front'] },
    { name: 'Pomodoro App', descricao: 'Pomodoro', categories: ['front'] },
    { name: 'Blog', descricao: 'blog com api externa strapi', categories: ['front', 'fullstack'] },
    { name: 'Agenda MVC ', descricao: 'Projeto agenda mvc', categories: ['fullstack', 'backend'] },
    { name: 'Fronnt Api Escola', descricao: 'Uma api que cadastra alunos com fotos', categories: ['fullstack', 'front'] },
    { name: 'Api Escola', descricao: 'Uma api que cadastra alunos com fotos', categories: ['fullstack', 'backend'] },
    { name: 'Api Carros', descricao: 'Uma api que cadastra carros', categories: ['backend'] },
    { name: 'Api Valorant', descricao: 'Projeto agenda mvc', categories: ['build', 'backend'] },
    { name: 'Front Api Valorant', descricao: 'Uma api que cadastra alunos com fotos', categories: ['build', 'frontend'] },
];
