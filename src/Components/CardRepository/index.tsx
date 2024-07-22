import React from 'react';
import { Card, CardContent, Container, IconsContainer } from './styled';
import ButtonCode from '../ButtonCode';
import { toast } from 'react-toastify';
import { ButtonsLinks } from '../ButtonCode/styled';
import { ProjectsObjProps } from '../../interfaces';

const alertToast = () => toast.error('Não estou em deploy');
const alertRedirect = () => toast.info('Você será redirecionado');

const CardRepository: React.FC<ProjectsObjProps> = ({ name, descricao, deployURL, githubURL, imageURL, icons, deploy }) => {
    const handleDeployClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        if (deploy === true) {
            alertRedirect();
            setTimeout(() => {
                window.open(deployURL, '_blank');
            }, 1500);
        } else if (deploy === false) {
            alertToast();
        }
    };

    const handleCodeClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        alertRedirect();

        setTimeout(() => {
            window.open(githubURL, '_blank');
        }, 1000);
    };

    return (
        <Container>
            <Card>
                <img src={imageURL} alt={name} />

                <CardContent>
                    <div>
                        <h1>{name}</h1>
                        <p>{descricao}</p>
                    </div>

                    <IconsContainer>{icons && icons.map((Icon, index) => <Icon key={index} />)}</IconsContainer>
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
