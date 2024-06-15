import styled from 'styled-components';

export const AmongUsButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 2px 20px;
    color: #000000;
    text-shadow: 2px 2px rgb(252, 251, 251);
    /* text-transform: uppercase; */
    cursor: pointer;
    border: solid 2px black;
    letter-spacing: 1px;
    font-weight: 600;
    font-size: 17px;
    background-color: hsl(49deg 98% 60%);
    border-radius: 50px;
    position: relative;
    overflow: hidden;
    transition: all 0.5s ease;

    &:active {
        transform: scale(0.9);
        transition: all 100ms ease;
    }

    svg {
        transition: all 0.5s ease;
        z-index: 2;
    }

    .play {
        transition: all 0.5s ease;
        transition-delay: 300ms;
    }

    &:hover svg {
        transform: scale(3) translate(50%);
    }

    .now {
        position: absolute;
        left: 0;
        transform: translateX(-100%);
        transition: all 0.5s ease;
        z-index: 2;
    }

    &:hover .now {
        transform: translateX(10px);
        transition-delay: 300ms;
    }

    &:hover .play {
        transform: translateX(200%);
        transition-delay: 300ms;
    }
`;
