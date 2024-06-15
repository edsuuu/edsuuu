import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ButtonAmongUS from '../../Components/ButtonAmongUS';
import ButtonHacking from '../../Components/ButtonHacking';
import MaquinaWriteHome from '../../Components/MaquinaWriteHome';
import { Container, LinksSociais, ButtonsNextPage, TitleHome } from './styled';

const Home = () => {
    // const texts = ['Olá, Eu sou Edson !!', 'Sou Desenvolvedor Web e FullStack'];
    const texts = ['Hey guys, I am Edson !!', 'I am a FullStack Web Developer  '];
    const [currentIndex, setCurrentIndex] = useState(0);

    const navigate = useNavigate();

    const handleComplete = () => {
        setCurrentIndex((prevIndex: number) => prevIndex + 1);
    };

    const handleNavigation = () => {
        navigate('/sobre');
    };

    return (
        <Container>
            <TitleHome>{texts.map((text, index) => index <= currentIndex && <MaquinaWriteHome key={index} text={text} onComplete={handleComplete} />)}</TitleHome>

            <LinksSociais>
                <ButtonHacking text="Linkedin" />
                <ButtonHacking text="GitHub" />
            </LinksSociais>

            <ButtonsNextPage>
                <div>
                    <ButtonAmongUS textBefore="Sobre" textAfter="Mim" onclick={handleNavigation} />
                </div>
            </ButtonsNextPage>
        </Container>
    );
};

export default Home;
