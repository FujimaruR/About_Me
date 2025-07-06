import Navbar from '../components/Navbar';
import Contactame from '../components/Contactame';
import Footer from '../components/Footer';
import '../css/App.css';

const Contacta = () => {
    return (
        < div className="app" >
            <Navbar />
            <main>
                <Contactame />
            </main>
            <Footer />
        </div >
    );
};

export default Contacta;