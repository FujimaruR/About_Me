import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import MostrarPortafolio from '../components/MostrarPortafolio';
import '../css/App.css';

const Portafolio = () => {
    return (
        < div className="app" >
            <Navbar />
            <main>
                <MostrarPortafolio />
            </main>
            <Footer />
        </div >
    );
};

export default Portafolio;