import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ButtonAmongUS from '../../Components/ButtonAmongUS';
import ButtonHacking from '../../Components/ButtonHacking';
import MaquinaWriteHome from '../../Components/MaquinaWriteHome';
import { Container, LinksSociais, ButtonsNextPage, TitleHome } from './styled';
import { toast } from 'react-toastify';

const Home: React.FC = () => {
    const texts = ['Olá, Eu sou Edson !!', 'Sou Desenvolvedor Web FullStack'];
    // const texts = ['Hey guys, I am Edson !!', 'I am a FullStack Web Developer  '];

    const [currentIndex, setCurrentIndex] = useState(0);
    const navigate = useNavigate();

    const handleComplete = () => {
        setCurrentIndex((prevIndex: number) => prevIndex + 1);
    };

    const handleNavigation = () => {
        navigate('/sobre');
    };

    const alertRedirect = () => toast.info('Voce vai ser redirecionado em alguns segundos', { theme: 'dark' });

    const handleLinkedin = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        alertRedirect();

        setTimeout(() => {
            window.open('https://www.linkedin.com/in/edsonlima343/', '_blank');
        }, 3000);
    };
    const handleGithub = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        alertRedirect();

        setTimeout(() => {
            window.open('https://github.com/edsuuu', '_blank');
        }, 3000);
    };

    return (
        <Container>
            <TitleHome>{texts.map((text, index) => index <= currentIndex && <MaquinaWriteHome key={index} text={text} onComplete={handleComplete} />)}</TitleHome>

            <LinksSociais>
                <ButtonHacking text="Linkedin" onClick={handleLinkedin} />
                <ButtonHacking text="GitHub" onClick={handleGithub} />
            </LinksSociais>

            <ButtonsNextPage>
                {/* trocar o among */}
                <div>
                    <ButtonAmongUS textBefore="Sobre" textAfter="Mim" onClick={handleNavigation} />
                </div>
            </ButtonsNextPage>
        </Container>
    );
};

export default Home;
