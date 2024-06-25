import styled from 'styled-components';

export const NavbarBrandContainer = styled.div`
    display: flex;
    cursor: pointer;
    padding-bottom: 5px;

    a {
        text-decoration: none;
        color: white;
    }
`;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
// export const RotatingIcon = styled.div`
//     transition: transform 500ms ease-in-out;
//     ${NavbarBrandContainer}:hover & {
//         transform: rotate(360deg);
//     }
// `;

export const TextContainer = styled.div`
    display: flex;
    position: relative;
    overflow: hidden;
    white-space: nowrap;
    transition: all 500ms ease-in-out;
`;

export const Text = styled.h3`
    transition: transform 500ms ease-in-out;
`;

export const CodeBy = styled(Text)`
    ${NavbarBrandContainer}:hover & {
        transform: translateX(-101%);
    }
`;

export const TitleOne = styled(Text)`
    padding-left: 0.55rem;
    ${NavbarBrandContainer}:hover & {
        transform: translateX(-3.5rem);
    }
`;

export const TitleTwo = styled(Text)`
    position: absolute;
    left: 8rem;
    padding-left: 0.25rem;
    ${NavbarBrandContainer}:hover & {
        transform: translateX(-3.5rem);
    }
`;
