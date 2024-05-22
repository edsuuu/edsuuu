import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyled';
import AppRoutes from './Router';
import Navigation from './Components/Navbar';
import Footer from './Components/Footer';

export default function App(): JSX.Element {
    return (
        <>
            <Router>
                <GlobalStyle />
                <Navigation />
                <AppRoutes />
                <Footer />
            </Router>
        </>
    );
}
