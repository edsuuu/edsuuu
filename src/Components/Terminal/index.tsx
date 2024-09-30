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
    // Curriculo,
    BreveDescricao,
} from './styled';
import * as Icon from 'react-icons/vsc';
import Skills from '../Skills';
// import { FaDownload } from 'react-icons/fa';
// import { toast } from 'react-toastify';
// import curriculo from '../../Assets/Curriculo.pdf';
// import PDFViewer from '../PDFViewer';

const Terminal: React.FC = () => {
    const [showContent, setShowContent] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowContent(true);
        }, 2200);

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
                        <>
                            <BreveDescricao>
                                <div>
                                    <h2>
                                        # <span>Sobre</span>
                                    </h2>
                                    <p>
                                        <br />
                                        <LinkStyled to="/projetos">Ver meus Projetos</LinkStyled>
                                    </p>
                                </div>
                            </BreveDescricao>
                        </>
                        <Skills />
                    </ContainerButtonProjectPSW>
                </div>
            </ContentPSW>
        </PowerShell>
    );
};

export default Terminal;
