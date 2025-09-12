const Whatsapp = () => {

    return (

        <section className="hero text-center p-5">
            <div className="mt-5 text-white text-center">
                <h2 className="mb-3">Contáctame por WhatsApp</h2>
                <img src="../img/whatsapp-logo.png" width="10%" height="auto" className="img-fluid" alt="Whatsapp"/>
                <p>
                    <a
                        href="https://wa.me/528118925876"
                        className="btn btn-success"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="bi bi-whatsapp me-2"></i> Enviar mensaje por WhatsApp
                    </a>
                </p>
                <p className="mt-2">También puedes escribirme directamente al: <strong>+52 81 1892 5876</strong></p>
            </div>
        </section>

    );
};

export default Whatsapp;