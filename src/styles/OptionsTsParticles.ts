import { type ISourceOptions, MoveDirection, OutMode } from '@tsparticles/engine';

export const OptionsTsParticles: ISourceOptions = {
    background: {
        color: {
            value: '#11111a',
        },
    },
    fpsLimit: 60,
    interactivity: {
        events: {
            onClick: {
                enable: true,
                mode: 'push',
            },
            onHover: {
                enable: false,
                mode: 'repulse',
            },
        },
        modes: {
            push: {
                quantity: 1,
            },
            repulse: {
                distance: 120,
                duration: 0.2,
            },
        },
    },
    particles: {
        color: {
            value: '#00a4ef',
        },
        links: {
            color: '#00a4ef',
            distance: 150,
            enable: true,
            opacity: 0.9,
            width: 0.8,
        },
        move: {
            direction: MoveDirection.none,
            enable: true,
            outModes: {
                default: OutMode.out,
            },
            random: false,
            speed: 4,
            straight: false,
        },
        number: {
            density: {
                enable: true,
            },
            value: 100,
        },
        opacity: {
            value: 0.5,
        },
        shape: {
            type: 'circle',
        },
        size: {
            value: { min: 1, max: 3 },
        },
    },
    detectRetina: true,
};
