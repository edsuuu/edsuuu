import { AbasPowerShell, PowerShell, PwsNewTabs, PwsTabs, PwsTabsButtons, PwsWindowButtons, PwsTabsTitle, ContentPSW } from './styled';
import * as Icon from 'react-icons/vsc';

export default function Terminal(): JSX.Element {
    return (
        <>
            <PowerShell>
                {/* LINKS DO POWERSHELL, ABA, FECHAR  */}
                <AbasPowerShell>
                    <PwsTabsButtons>
                        <PwsTabs>
                            <div>
                                <Icon.VscTerminalPowershell />
                                <PwsTabsTitle>PowerShell</PwsTabsTitle>
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
                        <p>PowerShell 7.4.2</p>
                        <p>C:\Users\edsu&gt;{}</p>
                    </div>
                </ContentPSW>
            </PowerShell>
        </>
    );
}
