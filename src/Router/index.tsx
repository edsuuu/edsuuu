import { Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home';
import About from '../Pages/About';
import Contact from '../Pages/Contact';
import Experience from '../Pages/Experience';
import Error404 from '../Pages/Error';
import Project from '../Pages/Projects';

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<About />} />
            <Route path="/projetos" element={<Project />} />
            <Route path="/experiencia" element={<Experience />} />
            <Route path="/contato" element={<Contact />} />
            <Route path="*" element={<Error404 />} />
        </Routes>
    );
}
