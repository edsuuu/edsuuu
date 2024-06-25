import { IconType } from 'react-icons';

export interface ProjectsObjProps {
    name: string;
    descricao: string;
    categories: string[];
    imageURL: string;
    githubURL?: string;
    tecnologias?: string[];
    icons: IconType[];
    deploy: boolean;
    deployURL: string;
}
