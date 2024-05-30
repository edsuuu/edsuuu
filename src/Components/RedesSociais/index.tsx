import { FaHome, FaUser, FaUsers } from 'react-icons/fa';
import { Redes } from './styled';

const rotas = [
    { name: 'Linkedin', to: 'https://www.linkedin.com/in/edsonlima343', icon: <FaHome size={20} /> },
    { name: 'Github', to: 'https://github.com/edsuuu', icon: <FaUsers size={20} /> },
    { name: 'Gmail', to: '/gmail', icon: <FaUser size={16} /> },
];

export default function RedesSociais() {
    return (
        <Redes>
            {rotas.map((rota, index) => (
                <li key={index}>
                    <a href={rota.to} target="_blank">
                        <span>{rota.icon}</span>
                        {rota.name}
                    </a>
                </li>
            ))}
        </Redes>
    );
}
