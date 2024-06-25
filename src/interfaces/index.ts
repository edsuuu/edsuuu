import { IconType } from 'react-icons';

export interface ButtonAmongUsProps {
    textBefore: string;
    textAfter: string;
    onclick?: () => void;
}

export interface ButtonTextProps {
    text: string;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export interface ButtonHackingProps {
    text: string;
}

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

export interface MaquinaWriteProps {
    text: string;
    delay?: number;
}

export interface MaquinaWriteHomeProps {
    text: string;
    delay?: number;
    onComplete: () => void;
}

export interface RotasNavigationProps {
    name: string;
    to: string;
}

export interface RedesSociaisProps {
    name: string;
    to: string;
    icon: JSX.Element;
    className: string;
}

export interface TransitionComponentProps {
    children: React.ReactNode;
}

export interface TransitionContextType {
    completed: boolean;
    toggleCompleted: (value: boolean) => void;
}
