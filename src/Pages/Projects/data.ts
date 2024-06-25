import { DiSass, DiReact } from 'react-icons/di';
import { RiJavascriptFill } from 'react-icons/ri';
import { ProjectsObjProps } from './types/types';
import { TbBrandCss3 } from 'react-icons/tb';
import { TiHtml5 } from 'react-icons/ti';
import { BiLogoRedux, BiLogoTypescript } from 'react-icons/bi';
import { SiStyledcomponents } from 'react-icons/si';
import { FaNode } from 'react-icons/fa';
import { GrMysql } from 'react-icons/gr';
import { BiLogoMongodb } from 'react-icons/bi';

import api_1 from '../../assets/api-1.webp';
import api_2 from '../../assets/api-2.webp';
import api_3 from '../../assets/api-3.webp';
import coffeShop from '../../assets/coffe-shop.png';
import hydraPage from '../../assets/hydra-page.png';
import portFolio from '../../assets/portfolio.png';
import pomodoro from '../../assets/pomodoro.png';
import projetoAgenda from '../../assets/pj-agenda.png';
import frontEscola from '../../assets/front-escola.png';
import frontValorant from '../../assets/valorant.png';
import blogUniverse from '../../assets/blog-universe.png';

export const projectsObj: ProjectsObjProps[] = [
    {
        name: 'Meu Portfolio',
        descricao: 'Uma breve pagina',
        categories: ['front', 'build'],
        tecnologias: ['ReactTs', 'Styled Components'],
        icons: [DiReact, BiLogoTypescript, SiStyledcomponents],
        githubURL: 'https://github.com/edsuuu/edsuuu',
        imageURL: portFolio,
        deploy: false,
        deployURL: '',
    },
    {
        name: 'Hydra Landing Page',
        descricao: 'Uma breve pagina',
        categories: ['front', 'build'],
        tecnologias: ['ReactTs', 'Styled Components'],
        icons: [DiReact, BiLogoTypescript, SiStyledcomponents],
        githubURL: 'https://github.com/edsuuu/hydra-landing-page',
        imageURL: hydraPage,
        deploy: true,
        deployURL: 'https://hydra-landing-page-nu.vercel.app',
    },
    {
        name: 'NFT Landing Page',
        descricao: 'Uma breve pagina',
        categories: ['front'],
        tecnologias: ['ReactJs', 'Scss'],
        icons: [DiReact, RiJavascriptFill, DiSass],
        githubURL: 'https://github.com/edsuuu/landing-page-nft',
        imageURL: 'https://raw.githubusercontent.com/edsuuu/landing-page-nft/main/public/Home.PNG',
        deploy: true,
        deployURL: 'https://landing-page-nft-three.vercel.app',
    },

    {
        name: 'Front Escola',
        descricao: 'Uma breve pagina',
        categories: ['front', 'fullstack'],
        tecnologias: [],
        icons: [DiReact, RiJavascriptFill, SiStyledcomponents, BiLogoRedux],
        githubURL: 'https://github.com/edsuuu/front-escola ',
        imageURL: 'https://raw.githubusercontent.com/edsuuu/front-escola/main/public/image.png',
        deploy: false,
        deployURL: '',
    },
    {
        name: 'Front Valorant',
        descricao: 'Uma breve pagina',
        categories: ['build', 'front', 'fullstack'],
        tecnologias: [],
        icons: [DiReact, BiLogoTypescript, SiStyledcomponents, BiLogoRedux],
        githubURL: frontEscola,
        imageURL: frontValorant,
        deploy: false,
        deployURL: '',
    },

    {
        name: 'Pomodoro App',
        descricao: 'Uma breve pagina',
        categories: ['front'],
        tecnologias: [],
        icons: [DiReact, RiJavascriptFill, TbBrandCss3],
        githubURL: 'https://github.com/edsuuu/pomodoro-app',
        imageURL: pomodoro,
        deploy: true,
        deployURL: 'https://pomodoro-timer-tsx.vercel.app/',
    },
    {
        name: 'Coffe Shop ',
        descricao: 'Uma breve pagina',
        categories: ['front'],
        tecnologias: ['HTML', 'CSS'],
        icons: [TiHtml5, TbBrandCss3],
        githubURL: 'https://github.com/edsuuu/coffee-shop',
        imageURL: coffeShop,
        deploy: true,
        deployURL: 'https://edsuuu.github.io/coffee-shop/',
    },
    {
        name: 'Blog Universe',
        descricao: 'blog teste',
        categories: ['front'],
        tecnologias: [],
        icons: [TiHtml5, TbBrandCss3],
        githubURL: 'https://github.com/edsuuu/universe',
        imageURL: blogUniverse,
        deploy: true,
        deployURL: 'https://edsuuu.github.io/universe/',
    },

    {
        name: 'Api Valorant',
        descricao: 'api cadastro de contas',
        categories: ['build', 'backend'],
        tecnologias: [],
        icons: [BiLogoTypescript, BiLogoMongodb],
        githubURL: '',
        imageURL: api_3,
        deploy: false,
        deployURL: '',
    },
    {
        name: 'Api Escola',
        descricao: 'Uma api que cadastra alunos com fotos',
        categories: ['fullstack', 'backend'],
        tecnologias: [],
        icons: [FaNode, GrMysql],
        githubURL: '',
        imageURL: api_1,
        deploy: false,
        deployURL: '',
    },
    {
        name: 'Api Carros',
        descricao: 'Uma api que cadastra carros',
        categories: ['fullstack', 'backend'],
        tecnologias: [],
        icons: [FaNode, GrMysql],
        githubURL: '',
        imageURL: api_2,
        deploy: false,
        deployURL: '',
    },
    {
        name: 'Agenda MVC ',
        descricao: 'Projeto agenda mvc',
        categories: ['fullstack', 'backend', 'front'],
        tecnologias: [],
        icons: [FaNode, BiLogoMongodb],
        githubURL: 'https://github.com/edsuuu/projeto_agenda_mvc',
        imageURL: projetoAgenda,
        deploy: false,
        deployURL: '',
    },
];
