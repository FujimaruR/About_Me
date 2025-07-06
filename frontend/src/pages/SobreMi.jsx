import Navbar from '../components/Navbar';
import Projects from '../components/Projects';
import Footer from '../components/Footer';
import '../css/App.css';

const SobreMi = () => {
    return (
        < div className="app" >
            <Navbar />
            <main>
                <Projects />
            </main>
            <Footer />
        </div >
    );
};

export default SobreMi;