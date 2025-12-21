import Navbar from '../components/Navbar';
import Demos from '../components/Demos';
import Footer from '../components/Footer';
import '../css/App.css';

const Clientes = () => {
    return (
        < div className="app" >
            <Navbar />
            <main>
                <Demos />
            </main>
            <Footer />
        </div >
    );
};

export default Clientes;