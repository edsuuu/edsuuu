import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyle } from './styles/GlobalStyled';
import AppRoutes from './Router';
import Navigation from './Components/Navbar';
import React, { useEffect, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { type Container } from '@tsparticles/engine';
import { loadSlim } from '@tsparticles/slim';
import { ToastContainer } from 'react-toastify';
import { OptionsTsParticles } from './styles/OptionsTsParticles';

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

    return (
        <>
            {init && <Particles id="tsparticles" className="particles-container" particlesLoaded={particlesLoaded} options={OptionsTsParticles} />}

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
