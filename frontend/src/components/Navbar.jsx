import { useNavigate } from 'react-router-dom';

const Navbar = () => {

    const navigate = useNavigate();

    const handleHome = () => {
        navigate('/Home');
    };

    const handleSobreMi = () => {
        navigate('/EmilioCastillo');
    };

    const handleProyectos = () => {
        navigate('/Proyectos');
    };

    const handleContacto = () => {
        navigate('/Contacto');
    };

    return (
        <header className="d-flex justify-content-between align-items-center p-4 border-bottom flex-wrap">
            <button
                onClick={handleHome}
                className="d-flex align-items-center gap-2 border-0 bg-transparent"
            >
                <img
                    src="/favicon.png"
                    alt="LogoYo"
                    style={{ width: "4%", height: "auto", objectFit: "contain" }}
                />
                <h3 className="text-primary mb-0">Emilio Yair Castillo Pacheco</h3>
            </button>
            <nav className="mt-2 mt-md-0">
                <button onClick={handleHome} className="mx-2 text-white d-inline-block">Home</button>
                <button onClick={handleSobreMi} className="mx-2 text-white d-inline-block">Sobre mi</button>
                <button onClick={handleProyectos} className="mx-2 text-white d-inline-block">Proyectos</button>
                <button onClick={handleContacto} className="mx-2 text-white d-inline-block">Contacto</button>
            </nav>
        </header>
    );
};

export default Navbar;