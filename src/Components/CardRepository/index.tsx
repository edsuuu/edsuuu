import React from 'react';
import { Card, CardContent, Container, IconsContainer } from './styled';
import ButtonCode, { ButtonsLinks } from './ButtonCode';
import { ProjectsObjProps } from '../../Pages/Projects/types/types';
import { toast } from 'react-toastify';

const alertToast = () => toast.error('Não estou em deploy');
const alertRedirect = () => toast.info('Voce vai ser redirecionado em alguns segundos');

const CardRepository: React.FC<ProjectsObjProps> = ({ name, descricao, deployURL, githubURL, imageURL, icons, deploy }) => {
    const handleDeployClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        if (deploy === true) {
            alertRedirect();
            setTimeout(() => {
                window.open(deployURL, '_blank');
            }, 2000);
        } else if (deploy === false) {
            alertToast();
        }
    };

    const handleCodeClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        alertRedirect();

        setTimeout(() => {
            window.open(githubURL, '_blank');
        }, 3000);
    };

    return (
        <Container>
            <Card>
                <img src={imageURL} loading="lazy" alt={name} />

                <CardContent>
                    <div>
                        <h1>{name}</h1>
                        {/* <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ducimus voluptates perspiciatis repellat ut ipsam, commodi quaerat ullam magnam tempora illo corrupti dolor
                            nihil molestiae hic mollitia quia nulla minima?
                        </p> */}
                        <p>{descricao}</p>
                    </div>

                    <IconsContainer>
                        {icons &&
                            icons.map((Icon, index) => (
                                <span key={index}>
                                    <Icon size={40} />
                                </span>
                            ))}
                    </IconsContainer>
                    <ButtonsLinks>
                        <ButtonCode text={'Codigo'} onClick={handleCodeClick} />
                        <ButtonCode text={'Deploy'} onClick={handleDeployClick} />
                    </ButtonsLinks>
                </CardContent>
            </Card>
        </Container>
    );
};

export default CardRepository;
