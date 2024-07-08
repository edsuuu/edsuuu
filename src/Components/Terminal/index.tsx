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
import Skills from '../Skills';
import { FaDownload } from 'react-icons/fa';
import { toast } from 'react-toastify';
import curriculo from '../../Assets/Curriculo.pdf';
import PDFViewer from '../PDFViewer';

const Terminal: React.FC = () => {
    const [showContent, setShowContent] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowContent(true);
        }, 2300);

        return () => clearTimeout(timer);
    }, []);

    const handleDownloadCurriculo = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        toast.success('O download será iniciado em alguns segundos ', { theme: 'dark' });

        setTimeout(() => {
            const link = document.createElement('a');
            link.href = curriculo;
            link.setAttribute('download', 'Curriculo.pdf');
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }, 3000);
    };

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
                                        Meu nome é Edson. Atuava na área administrativa e migrei para a área de desenvolvimento de software há mais de 1 ano. Durante esse tempo, passei a desenvolver
                                        aplicações web, single-page applications e sistemas web. <LinkStyled to="/projetos"> Ver meus Projetos</LinkStyled>
                                    </p>
                                </div>
                                <Curriculo>
                                    <div>
                                        <h2>
                                            # <span>Meu currículo</span>
                                        </h2>
                                    </div>
                                    <div className="btns-curriculo">
                                        <PDFViewer />

                                        <button className="btn-download" onClick={handleDownloadCurriculo}>
                                            <div className="icons-terminal">
                                                <FaDownload size={20} />
                                            </div>
                                            <span className="tooltip">Download</span>
                                        </button>
                                    </div>
                                </Curriculo>
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
