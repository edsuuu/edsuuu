import { AbasPowerShell, Container, PowerShell, PwsNewTabs, PwsTabs, PwsTabsButtons, PwsWindowButtons } from './styled';

import * as Icon from 'react-icons/vsc';

const Home = () => {
    return (
        <Container>
            <div>
                <h1>Desenvolvedor FullStack</h1>
            </div>
            <PowerShell>
                {/* LINKS DO POWERSHELL, ABA, FECHAR  */}
                <AbasPowerShell>
                    <PwsTabsButtons>
                        <PwsTabs>
                            <Icon.VscTerminalPowershell />
                            <span>
                                PowerShell <Icon.VscClose />
                            </span>
                        </PwsTabs>

                        <PwsNewTabs>
                            <Icon.VscAdd />
                            <Icon.VscChevronDown />
                        </PwsNewTabs>
                    </PwsTabsButtons>

                    <PwsWindowButtons>
                        <Icon.VscChromeMinimize />

                        <Icon.VscChromeMaximize />

                        <Icon.VscClose />
                    </PwsWindowButtons>
                </AbasPowerShell>
            </PowerShell>
        </Container>
    );
};

export default Home;
