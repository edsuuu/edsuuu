import api_1 from '../../assets/api-1.webp';
import api_2 from '../../assets/api-2.webp';
import api_3 from '../../assets/api-3.webp';

export interface ProjectsObjProps {
    name: string;
    descricao: string;
    categories: string[];
    imageURL: string;
    githubURL?: string;
    tecnologias?: string;
}

export const projectsObj: ProjectsObjProps[] = [
    {
        name: 'Meu Portfolio',
        descricao: 'descricao',
        categories: ['front'],
        githubURL: 'https://github.com/edsuuu/edsuuu',
        imageURL: 'https://via.placeholder.com/400x300',
    },
    {
        name: 'Hydra Landing Page',
        descricao: 'Uma breve pagina',
        categories: ['front', 'build'],
        githubURL: 'https://github.com/edsuuu/hydra-landing-page',
        imageURL: 'https://via.placeholder.com/400x300',
    },
    {
        name: 'NFT Landing Page',
        descricao: 'Uma breve pagina',
        categories: ['front'],
        githubURL: 'https://github.com/edsuuu/landing-page-nft',
        imageURL: 'https://via.placeholder.com/400x300',
    },
    {
        name: 'Coffe Shop ',
        descricao: 'Projeto agenda mvc',
        categories: ['front'],
        imageURL: 'https://via.placeholder.com/400x300',
    },
    {
        name: 'Pomodoro App',
        descricao: 'Pomodoro',
        categories: ['front'],
        imageURL: 'https://via.placeholder.com/400x300',
    },
    {
        name: 'Blog',
        descricao: 'blog com api externa strapi',
        categories: ['front', 'fullstack'],
        imageURL: 'https://via.placeholder.com/400x300',
    },
    {
        name: 'Agenda MVC ',
        descricao: 'Projeto agenda mvc',
        categories: ['fullstack', 'backend'],
        imageURL: 'https://via.placeholder.com/400x300',
    },
    {
        name: 'Front Escola',
        descricao: 'Front que consome a API Escola',
        categories: ['fullstack', 'front'],
        imageURL: 'https://via.placeholder.com/400x300',
    },
    {
        name: 'Front Valorant',
        descricao: 'Front que consome a API Valorant',
        categories: ['build', 'frontend'],
        imageURL: 'https://via.placeholder.com/400x300',
    },
    {
        name: 'Api Escola',
        descricao: 'Uma api que cadastra alunos com fotos',
        categories: ['fullstack', 'backend'],
        imageURL: api_1,
    },
    {
        name: 'Api Carros',
        descricao: 'Uma api que cadastra carros',
        categories: ['backend'],
        imageURL: api_2,
    },
    {
        name: 'Api Valorant',
        descricao: 'Projeto agenda mvc',
        categories: ['build', 'backend'],
        imageURL: api_3,
    },
];
