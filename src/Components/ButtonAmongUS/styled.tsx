import styled from 'styled-components';

export const AmongUsButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 0 20px;
    color: #ffffff;
    text-shadow: 2px 2px rgb(38, 38, 38);
    cursor: pointer;
    border: solid 2px black;
    letter-spacing: 1px;
    font-weight: 600;
    font-size: 17px;
    background-color: #00a4ef;
    /* border-radius: 50px; */
    position: relative;
    overflow: hidden;
    transition: all 0.5s ease;

    &:active {
        transform: scale(0.9);
        transition: all 100ms ease;
    }

    svg {
        transition: all 0.5s ease;
        z-index: 1;
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
        transform: translateX(-110%);
        transition: all 0.5s ease;
        z-index: 1;
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
