import Terminal from '../../Components/Terminal';
import About from '../About';
import { Container, Introduction, SecondPages } from './styled';

const Home = () => {
    return (
        <>
            <Container>
                <Introduction>
                    <h1>Desenvolvedor FullStack</h1>
                    <br />
                    <br />
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro cumque suscipit pariatur totam laborum autem quos fugiat, quas magni impedit ab doloribus temporibus enim
                        molestias reiciendis facilis laudantium quo molestiae!
                    </p>
                    <br />
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro cumque suscipit pariatur totam laborum autem quos fugiat, quas magni impedit ab doloribus temporibus enim
                        molestias reiciendis facilis laudantium quo molestiae!
                    </p>
                    <br />
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro cumque suscipit pariatur totam laborum autem quos fugiat, quas magni impedit ab doloribus temporibus enim
                        molestias reiciendis facilis laudantium quo molestiae!
                    </p>
                </Introduction>
                <Terminal />
            </Container>
            <About></About>
        </>
    );
};

export default Home;
