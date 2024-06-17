import { useNavigate } from 'react-router-dom';
import MaquinaWriteAbout from '../MaquinaWriteAbout';
import { AbasPowerShell, PowerShell, PwsNewTabs, PwsTabs, PwsTabsButtons, PwsWindowButtons, PwsTabsTitle, ContentPSW, ContainerButtonProjectPSW } from './styled';
import * as Icon from 'react-icons/vsc';

export default function Terminal(): JSX.Element {
    const navigate = useNavigate();

    const handleNavigation = () => {
        navigate('/projetos');
    };

    return (
        <>
            <PowerShell>
                {/* LINKS DO POWERSHELL, ABA, FECHAR  */}
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

                    <ContainerButtonProjectPSW>
                        <h1>Componente precisa ser montado apos 1 segundo</h1>
                        <br />
                        <h1>pequena descricao sobre mim</h1>
                        <br />

                        <h1> soft skills</h1>
                        <h1>skills/linguages, databases, ferramentas, frameworks</h1>
                        <br />
                        <h1>download para um Curriculo </h1>
                        <br />

                        <button onClick={handleNavigation}>
                            <h1>Button para navegar para projetos </h1>
                        </button>
                    </ContainerButtonProjectPSW>
                </ContentPSW>
            </PowerShell>
        </>
    );
}
