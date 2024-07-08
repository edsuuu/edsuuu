import ServicosFrellaCard from '../../Components/ServicosFrellaCard';
import { Container } from './styled';
import React from 'react';

const Freelancer: React.FC = () => {
    return (
        <Container>
            <div className="servicos">
                <ServicosFrellaCard />
            </div>
        </Container>
    );
};

export default Freelancer;
