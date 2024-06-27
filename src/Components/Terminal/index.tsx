import React, { useState, useEffect } from 'react';
import MaquinaWriteAbout from '../MaquinaWriteAbout';
import { AbasPowerShell, PowerShell, PwsNewTabs, PwsTabs, PwsTabsButtons, PwsWindowButtons, PwsTabsTitle, ContentPSW, ContainerButtonProjectPSW, LinkStyled } from './styled';
import * as Icon from 'react-icons/vsc';
import SoftSkiils from '../SoftSkiils';

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
                    <div className="comands">
                        <p>C:\Sobre\edsu&gt;</p>
                        <MaquinaWriteAbout text="cat sobre-mim.txt" />
                    </div>

                    {/* <div className="status-github">
                                <a href="https://github.com/anuraghazra/github-readme-stats">
                                    <img
                                        src="https://github-readme-stats.vercel.app/api/top-langs/?username=edsuuu&layout=donut-vertical&langs_count=10&theme=github_dark&border_color=00a4ef&bg_color=000000"
                                        alt="github-readme-stats"
                                    />
                                </a>
                            </div> */}

                    <div className={showContent ? 'show-content' : ''}>
                        <ContainerButtonProjectPSW className="container-button-project-psw">
                            <>
                                <h2>Pequena descrição sobre mim</h2>
                                <p>
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt quaerat odio vero mollitia unde quas magni deserunt magnam eos quisquam alias, officia reiciendis?
                                    Hic non neque repellendus maxime, aliquid quaerat.
                                </p>
                            </>
                            <br />
                            <h3>visualizar meu currículo</h3>
                            <br />

                            <div>
                                <LinkStyled to="/projetos"> Ver meus Projetos</LinkStyled>
                            </div>

                            <SoftSkiils />
                        </ContainerButtonProjectPSW>
                    </div>
                </ContentPSW>
            </PowerShell>
        </>
    );
};

export default Terminal;
