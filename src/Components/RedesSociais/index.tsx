import { FaLinkedin, FaGithub, FaDiscord } from 'react-icons/fa';
import { TbBrandGmail } from 'react-icons/tb';
import { Redes, LinksRedes } from './styled';
import React from 'react';

interface RotaProps {
    name: string;
    to: string;
    icon: JSX.Element;
    className: string;
}

const rotas: RotaProps[] = [
    { name: 'Linkedin', to: 'https://www.linkedin.com/in/edsonlima343', icon: <FaLinkedin size={30} />, className: 'linkedin' },
    { name: 'Github', to: 'https://github.com/edsuuu', icon: <FaGithub size={30} />, className: 'github' },
    { name: 'Gmail', to: '/gmail', icon: <TbBrandGmail size={30} />, className: 'gmail' },
    { name: 'Discord', to: '/discord', icon: <FaDiscord size={30} />, className: 'discord' },
];

const RedesSociais: React.FC = () => {
    return (
        <Redes>
            {rotas.map((rota, index) => (
                <LinksRedes key={index}>
                    <a className={rota.className} href={rota.to} target="_blank" rel="noreferrer">
                        <span>{rota.icon}</span>
                        <span className="name-redes-router">{rota.name}</span>
                    </a>
                </LinksRedes>
            ))}
        </Redes>
    );
};

export default RedesSociais;
