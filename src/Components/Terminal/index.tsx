import React, { useState, useEffect } from 'react';
import MaquinaWriteAbout from '../MaquinaWriteAbout';
import { AbasPowerShell, PowerShell, PwsNewTabs, PwsTabs, PwsTabsButtons, PwsWindowButtons, PwsTabsTitle, ContentPSW, ContainerButtonProjectPSW, LinkStyled } from './styled';
import * as Icon from 'react-icons/vsc';

const Terminal: React.FC = () => {
    const [showContent, setShowContent] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowContent(true);
        }, 2300);

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
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
                    <div>
                        <p>C:\Sobre\edsu&gt;</p>
                        <MaquinaWriteAbout text="cat sobre-mim.txt" />
                    </div>

                    <div className={showContent ? 'show-content' : ''}>
                        <ContainerButtonProjectPSW className="container-button-project-psw">
                            <div>
                                <h1>Pequena descrição sobre mim</h1>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi illo, distinctio repellendus exercitationem est dicta eius ut impedit odit. Sunt culpa in totam
                                    illum, nemo a aliquam sequi omnis possimus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi illo, distinctio repellendus exercitationem est dicta
                                    eius ut impedit odit. Sunt culpa in totam illum, nemo a aliquam sequi omnis possimus?
                                </p>
                            </div>
                            <br />

                            <h1>Soft skills</h1>
                            <h1>Skills, linguagens, databases, ferramentas, frameworks</h1>
                            <br />
                            {/* <h3>Download para o meu currículo</h3> */}
                            <br />

                            <div>
                                <LinkStyled to="/projetos"> Ir para Projetos</LinkStyled>
                            </div>
                        </ContainerButtonProjectPSW>
                    </div>
                </ContentPSW>
            </PowerShell>
        </>
    );
};

export default Terminal;
