import React from 'react';
import { InformacoesTecnicas, Title } from './styled';
import { databasesObj, frameworksObj, hostingObj, languagesObj, sistemasEferramentasObj } from '../Terminal/data';
import LanguagesComponent from '../LanguagesComponent';

const Skiils: React.FC = () => {
    return (
        <div className="skills-container">
            <Title>
                <h2>
                    # <span>Skills</span>
                </h2>
            </Title>
            <InformacoesTecnicas>
                <div className="card-infos">
                    <h2>Linguagens</h2>
                    <div className="content-icons">
                        {languagesObj.map((item, index) => (
                            <LanguagesComponent key={index} name={item.name} Icon={item.Icon} />
                        ))}
                    </div>
                    <p>Gosto de estar sempre atualizado e aprender novas tecnologias e habilidades. Por isso, sempre procuro fazer cursos online para expandir meus conhecimentos.</p>
                </div>
                <div className="card-infos">
                    <h2>Frameworks</h2>
                    <div className="content-icons">
                        {frameworksObj.map((item, index) => (
                            <LanguagesComponent key={index} name={item.name} Icon={item.Icon} />
                        ))}
                    </div>
                    <p>
                        Experiência em desenvolver aplicações front-end utilizando frameworks como React e Redux, junto com ferramentas de estilização como Styled Components e Sass, para criar
                        interfaces.
                    </p>
                </div>
                <div className="card-infos">
                    <div>
                        <h2>DevOps</h2>
                    </div>
                    <div className="content-icons">
                        {hostingObj.map((item, index) => (
                            <LanguagesComponent key={index} name={item.name} Icon={item.Icon} />
                        ))}
                    </div>
                    <div>
                        <p>
                            Utilizo hospedagens da AWS, Google Cloud e Azure para criar um Ambiente de Produção em minhas aplicações, implementando novos recursos e descobrindo novos projetos Open
                            Source.
                        </p>
                    </div>
                </div>
            </InformacoesTecnicas>
            <InformacoesTecnicas>
                <div className="card-infos">
                    <div>
                        <h2>Banco de dados</h2>
                    </div>
                    <div className="content-icons">
                        {databasesObj.map((item, index) => (
                            <LanguagesComponent key={index} name={item.name} Icon={item.Icon} />
                        ))}
                    </div>
                    <div>
                        <p>Trabalho com diversos banco de dados, incluindo MongoDB, MariaDB, MySQL e PostgreSQL, conforme cada projeto.</p>
                    </div>
                </div>
                <div className="card-infos">
                    <div>
                        <h2>Sistemas e Ferramentas</h2>
                    </div>
                    <div className="content-icons">
                        {sistemasEferramentasObj.map((item, index) => (
                            <LanguagesComponent key={index} name={item.name} Icon={item.Icon} />
                        ))}
                    </div>
                    <div>
                        <p>Utilizo Windows/Linux como sistema operacional, que me forneceu habilidades com Linha de Comando, Bash, Git e Docker.</p>
                    </div>
                </div>
            </InformacoesTecnicas>
        </div>
    );
};
export default Skiils;
