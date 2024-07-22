import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ButtonHacking from '../../Components/ButtonHacking';
import MaquinaWriteHome from '../../Components/MaquinaWriteHome';
import { Container, LinksSociais, ButtonsNextPage, TitleHome } from './styled';

const Home: React.FC = () => {
    const texts = ['Olá, Eu sou Edson !!', 'Sou Desenvolvedor Web FullStack'];

    const [currentIndex, setCurrentIndex] = useState(0);
    const navigate = useNavigate();

    const handleComplete = () => {
        setCurrentIndex((prevIndex: number) => prevIndex + 1);
    };

    const handleNavigation = () => {
        navigate('/sobre');
    };

    const handleLinkedin = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        window.open('https://www.linkedin.com/in/edsonlima343/', '_blank');
    };
    const handleGithub = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        window.open('https://github.com/edsuuu', '_blank');
    };

    return (
        <Container>
            <TitleHome>{texts.map((text, index) => index <= currentIndex && <MaquinaWriteHome key={index} text={text} onComplete={handleComplete} />)}</TitleHome>

            <LinksSociais>
                <ButtonHacking text="Linkedin" onClick={handleLinkedin} />
                <ButtonHacking text="GitHub" onClick={handleGithub} />
            </LinksSociais>

            <ButtonsNextPage>
                <ButtonHacking text="Sobre Mim" onClick={handleNavigation} />
            </ButtonsNextPage>
        </Container>
    );
};

export default Home;
