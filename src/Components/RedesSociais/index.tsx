import { FaLinkedin, FaGithub, FaDiscord  } from 'react-icons/fa';
// import { BiLogoGmail } from 'react-icons/bi';
import { TbBrandGmail } from "react-icons/tb";
import { Redes, LinksRedes } from './styled';

const rotas = [
    { name: 'Linkedin', to: 'https://www.linkedin.com/in/edsonlima343', icon: <FaLinkedin size={30} />, className: 'linkedin' },
    { name: 'Github', to: 'https://github.com/edsuuu', icon: <FaGithub size={30} />, className: 'github' },
    { name: 'Gmail', to: '/gmail', icon: <TbBrandGmail size={30} />, className: 'gmail' },
    { name: 'Discord', to: '/discord', icon: <FaDiscord  size={30} />, className: 'discord' },
];

export default function RedesSociais() {
    return (
        <Redes>
            {rotas.map((rota, index) => (
                <LinksRedes key={index}>
                    <a className={rota.className} href={rota.to} target="_blank">
                        <span>{rota.icon}</span>
                        <span className='name-redes-router'>{rota.name}</span>
                    </a>
                </LinksRedes>
            ))}
        </Redes>
    );
}
