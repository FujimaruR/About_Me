import { useNavigate } from 'react-router-dom';

const Header = () => {

  const navigate = useNavigate();

  const handleContacto = () => {
        navigate('/Contacto');
    };

    return (

        <section className="hero text-center p-5"
        style={{
                backgroundImage: "url('/Captura_Codigo.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                opacity: 0.9
            }}
        >
        <h1 className="display-4 text-white">Hola, soy <span className="text-primary">Desarrollador web</span></h1>
        <p className="lead text-white">Con experiencia en desarrollo web y software creando soluciones digitales eficientes y escalables.</p>
        <button onClick={handleContacto} className="btn btn-outline-primary mt-3">Ponte en contacto</button>
      </section>

    );
};

export default Header;
