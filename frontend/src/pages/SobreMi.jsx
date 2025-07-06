import Navbar from '../components/Navbar';
import AbMe from '../components/About_Me';
import Footer from '../components/Footer';
import '../css/App.css';
import Grafica from '../components/Grafica';
import Terminal from '../components/Terminal';

const SobreMi = () => {
    return (
        < div className="app" >
            <Navbar />
            <main>
                <AbMe />
                <Grafica />
                <Terminal />
            </main>
            <Footer />
        </div >
    );
};

export default SobreMi;