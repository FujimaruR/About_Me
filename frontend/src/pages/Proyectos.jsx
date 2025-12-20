import Navbar from '../components/Navbar';
import Projects from '../components/AllProjects';
import Footer from '../components/Footer';
import '../css/App.css';
import GitHub from '../components/GitHub';

const Proyectos = () => {
    return (
        < div className="app" >
            <Navbar />
            <main>
                <Projects />
                <GitHub />
            </main>
            <Footer />
        </div >
    );
};

export default Proyectos;