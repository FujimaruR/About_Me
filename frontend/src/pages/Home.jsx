import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Footer from '../components/Footer';
import '../css/App.css';

const Login = () => {
    return (
        < div className="app" >
            <Navbar />
            <Header />
            <main>
                <Projects />
                <Skills />
            </main>
            <Footer />
        </div >
    );
};

export default Login;