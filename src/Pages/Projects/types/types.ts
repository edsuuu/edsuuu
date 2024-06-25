import { IconType } from 'react-icons';

export interface ProjectsObjProps {
    name: string;
    descricao: string;
    categories: string[];
    imageURL: string;
    githubURL?: string;
    tecnologias?: string[];
    icons: IconType[];
    deploy: boolean; //fazer tipo um botao
    deployURL: string; //fazer tipo um botao
}
