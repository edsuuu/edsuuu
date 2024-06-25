import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyle } from './styles/GlobalStyled';
import AppRoutes from './Router';
import Navigation from './Components/Navbar';
import React, { useEffect, useMemo, useState } from 'react';

import Particles, { initParticlesEngine } from '@tsparticles/react';

import { type Container, type ISourceOptions, MoveDirection, OutMode } from '@tsparticles/engine';
import { loadSlim } from '@tsparticles/slim';
import { ToastContainer } from 'react-toastify';

const App: React.FC = () => {
    const [init, setInit] = useState<boolean>(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const particlesLoaded = async (container?: Container): Promise<void> => {
        container;
    };

    const options: ISourceOptions = useMemo(
        () => ({
            background: {
                color: {
                    value: '#11111a',
                },
            },
            fpsLimit: 120,
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
                        quantity: 4,
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
                    width: 1,
                },
                move: {
                    direction: MoveDirection.none,
                    enable: true,
                    outModes: {
                        default: OutMode.out,
                    },
                    random: false,
                    speed: 3,
                    straight: false,
                },
                number: {
                    density: {
                        enable: true,
                    },
                    value: 120,
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
        }),
        [],
    );

    return (
        <>
            {init && <Particles id="tsparticles" className="particles-container" particlesLoaded={particlesLoaded} options={options} />}

            <Router>
                <div className="content-container">
                    <Navigation />

                    <AppRoutes />
                    <GlobalStyle />
                    <ToastContainer autoClose={3000} className="toast-container" />
                </div>
            </Router>
        </>
    );
};

export default App;
