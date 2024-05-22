import styled from 'styled-components';

export const Container = styled.div`
    max-width: 1400px;
    min-width: 375px;
    height: 100vh;
    border: 1px solid #000;
    margin: 2px auto 0px auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
`;

export const PowerShell = styled.div`
    border: 1px solid #000;
    width: 600px;
    height: 500px;
`;

export const AbasPowerShell = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border: 1px solid #000;
`;

export const PwsTabsButtons = styled.div`
    display: flex;
    flex-direction: row;
    gap: 1px;
    align-items: center;
    margin: 0px;
`;

export const PwsNewTabs = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: gray;
    padding: 10px;
    margin: 8px 0px 0px 1px;
`;

export const PwsTabs = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: gray;
    padding: 10px;
    margin: 4px 0px 0px 5px;
`;

export const PwsWindowButtons = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
`;
