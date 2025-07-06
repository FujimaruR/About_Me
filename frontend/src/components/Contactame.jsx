import emailjs from 'emailjs-com';


const ContactoConmigo = () => {

    const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_6ku4rge', // Reemplaza con tu Service ID
        'template_u5rnhyn', // Reemplaza con tu Template ID
        e.target,
        'G8UtWO7QSaG4zKxzr' // Reemplaza con tu Public Key
      )
      .then(
        (result) => {
          alert('Mensaje enviado con éxito');
          e.target.reset();
        },
        (error) => {
          alert('Error al enviar el mensaje: ' + error.text);
        }
      );
  };

    return (

        <section className="hero text-center p-5">
            <h1 className="mb-4 text-primary">Enviame un correo</h1>
            <form className="row g-3" onSubmit={sendEmail}>
                <div className="col-lg-6">
                    <div className="mb-3">
                        <label htmlFor="nombre" className="form-label text-white">Nombre</label>
                        <input type="text" className="form-control" id="nombre" name="name" placeholder="Tu nombre" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="titulo" className="form-label text-white">Titulo</label>
                        <input type="text" className="form-control" id="titulo" name="title" placeholder="Titulo del correo" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="correo" className="form-label text-white">Correo electrónico</label>
                        <input
                            type="email"
                            className="form-control"
                            id="correo"
                            name="email"
                            placeholder="tucorreo@ejemplo.com"
                            required
                            pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
                        />
                    </div>
                </div>
                <div className="col-lg-6 d-flex flex-column justify-content-between">
                    <div className="mb-3 flex-grow-1">
                        <label htmlFor="mensaje" className="form-label text-white">Mensaje</label>
                        <textarea className="form-control h-100" id="mensaje" name="message" rows="6" placeholder="Escribe tu mensaje aquí..." required></textarea>
                    </div>
                </div>

                <div className="d-flex mb-4 justify-content-end">
                    <button type="submit" className="btn btn-outline-primary mt-3">Enviar</button>
                </div>
            </form>
        </section>

    );
};

export default ContactoConmigo;