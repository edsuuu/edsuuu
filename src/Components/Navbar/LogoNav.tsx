import styled from 'styled-components';

const NavbarBrandContainer = styled.div`
    display: flex;
    cursor: pointer;
    padding-bottom: 5px;
`;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
// const RotatingIcon = styled.div`
//     transition: transform 500ms ease-in-out;
//     ${NavbarBrandContainer}:hover & {
//         transform: rotate(360deg);
//     }
// `;

const TextContainer = styled.div`
    display: flex;
    position: relative;
    overflow: hidden;
    white-space: nowrap;
    transition: all 500ms ease-in-out;
`;

const Text = styled.h3`
    transition: transform 500ms ease-in-out;
`;

const CodeBy = styled(Text)`
    ${NavbarBrandContainer}:hover & {
        transform: translateX(-101%);
    }
`;

const TitleOne = styled(Text)`
    padding-left: 0.55rem;
    ${NavbarBrandContainer}:hover & {
        transform: translateX(-3.5rem);
    }
`;

const TitleTwo = styled(Text)`
    position: absolute;
    left: 8rem;
    padding-left: 0.25rem;
    ${NavbarBrandContainer}:hover & {
        transform: translateX(-3.5rem);
    }
`;

export function LogoNav() {
    return (
        <NavbarBrandContainer>
            {/* <RotatingIcon>©</RotatingIcon> */}

            <TextContainer>
                <CodeBy>Code by</CodeBy>
                <TitleOne>Edson</TitleOne>
                <TitleTwo>Lima</TitleTwo>
            </TextContainer>
        </NavbarBrandContainer>
    );
}
