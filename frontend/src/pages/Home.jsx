import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Contact from '../components/Contact';
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
            <Contact />
        </div >
    );
};

export default Login;