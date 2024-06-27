import React, { useState, useEffect } from 'react';
import MaquinaWriteAbout from '../MaquinaWriteAbout';
import {
    AbasPowerShell,
    PowerShell,
    PwsNewTabs,
    PwsTabs,
    PwsTabsButtons,
    PwsWindowButtons,
    PwsTabsTitle,
    ContentPSW,
    ContainerButtonProjectPSW,
    LinkStyled,
    Curriculo,
    BreveDescricao,
} from './styled';
import * as Icon from 'react-icons/vsc';
import Skiils from '../Skiils';

const Terminal: React.FC = () => {
    const [showContent, setShowContent] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowContent(true);
        }, 2300);

        return () => clearTimeout(timer);
    }, []);

    return (
        <PowerShell>
            <AbasPowerShell>
                <PwsTabsButtons>
                    <PwsTabs>
                        <div>
                            <Icon.VscTerminalPowershell />
                            <PwsTabsTitle>SobreMim</PwsTabsTitle>
                        </div>
                        <span className="pws-close-tabs">
                            <Icon.VscClose />
                        </span>
                    </PwsTabs>

                    <PwsNewTabs>
                        <span className="plus">
                            <Icon.VscAdd />
                        </span>
                        <span className="linha">|</span>
                        <span className="seta-bottom">
                            <Icon.VscChevronDown />
                        </span>
                    </PwsNewTabs>
                </PwsTabsButtons>

                <PwsWindowButtons>
                    <span className="min">
                        <Icon.VscChromeMinimize />
                    </span>
                    <span className="max">
                        <Icon.VscChromeMaximize />
                    </span>
                    <span className="clos">
                        <Icon.VscClose />
                    </span>
                </PwsWindowButtons>
            </AbasPowerShell>

            <ContentPSW>
                <div>
                    <p>PortFolio 1.0.0</p>
                </div>
                <div className="comands">
                    <p>C:\Sobre\edsu&gt;</p>
                    <MaquinaWriteAbout text="cat sobre-mim.txt" />
                </div>

                <div className={showContent ? 'show-content' : ''}>
                    <ContainerButtonProjectPSW className="container-button-project-psw">
                        <div>
                            <BreveDescricao>
                                <h2>Pequena descrição sobre mim</h2>
                                <p>
                                    Me chamo edson, era da area administrativa, e entrei para a area de desenvolvimento de software ah quase 2 anos, nesse tempo eu passei a desenvolver aplicoces web
                                    seja single page, sistemas web, <LinkStyled to="/projetos"> Ver meus Projetos</LinkStyled>
                                </p>
                            </BreveDescricao>
                            <Curriculo>
                                <div>
                                    <h3>visualizar meu currículo</h3>
                                </div>
                                <div>
                                    <button>Visualizar</button>
                                    <button>Baixar</button>
                                </div>
                            </Curriculo>
                        </div>

                        <Skiils />
                    </ContainerButtonProjectPSW>
                </div>
            </ContentPSW>
        </PowerShell>
    );
};

export default Terminal;
