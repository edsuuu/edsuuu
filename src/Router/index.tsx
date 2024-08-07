import { Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home';
import About from '../Pages/About';
import Contact from '../Pages/Contact';
import Error404 from '../Pages/Error';
import Project from '../Pages/Projects';
import { TransitionProvider } from '../Context/TransitionContext';
import TransitionComponent from '../Components/Transition';
import React from 'react';
// import Freelancer from '../Pages/Freelancer';
// import ProjectInfo from '../Pages/ProjectInfo';

const AppRoutes: React.FC = () => {
    return (
        <TransitionProvider>
            <Routes>
                <Route
                    path="/"
                    element={
                        <TransitionComponent>
                            <Home />
                        </TransitionComponent>
                    }
                />
                <Route
                    path="/sobre"
                    element={
                        <TransitionComponent>
                            <About />
                        </TransitionComponent>
                    }
                />

                <Route
                    path="/projetos"
                    element={
                        <TransitionComponent>
                            <Project />
                        </TransitionComponent>
                    }
                />

                {/* <Route
                    path="/freelancer"
                    element={
                        <TransitionComponent>
                            <Freelancer />
                        </TransitionComponent>
                    }
                /> */}

                <Route
                    path="/contato"
                    element={
                        <TransitionComponent>
                            <Contact />
                        </TransitionComponent>
                    }
                />

                <Route path="*" element={<Error404 />} />
            </Routes>
        </TransitionProvider>
    );
};

export default AppRoutes;
