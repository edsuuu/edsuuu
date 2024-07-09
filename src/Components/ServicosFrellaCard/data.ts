import { IoDesktop } from 'react-icons/io5';
import { FreelancerData } from '../../interfaces';
import { MdOutlineCollectionsBookmark } from 'react-icons/md';
import { TfiWorld } from 'react-icons/tfi';
import { FiSmartphone } from 'react-icons/fi';
import { BsCart4 } from 'react-icons/bs';

export const freelaObj: FreelancerData[] = [
    {
        id: 1,
        nome: 'Sites Institucionais',
        descricao: 'Criação de sites simples para empresas, com poucas páginas e funcionalidades básicas.',
        Icon: MdOutlineCollectionsBookmark,
    },
    {
        id: 2,
        nome: 'Landing Pages',
        descricao: 'Criação de páginas únicas com foco em conversão, como captura de leads ou vendas.',
        Icon: IoDesktop,
    },
    {
        id: 3,
        nome: 'Sistemas Web',
        descricao: 'Criação de sistemas personalizados para empresas, com funcionalidades complexas e integração com outros sistemas.',
        Icon: TfiWorld,
    },
    {
        id: 4,
        nome: 'Aplicativos Mobile',
        descricao: 'Criação de aplicativos para smartphones e tablets, com design responsivo e funcionalidades específicas.',
        Icon: FiSmartphone,
    },
    {
        id: 5,
        nome: 'E-Commerce',
        descricao: 'Criação de lojas virtuais com funcionalidades de catálogo de produtos, carrinho de compras, pagamento e gestão de pedidos.',
        Icon: BsCart4,
    },
];
