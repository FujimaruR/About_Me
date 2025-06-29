//import { Button, Form, Card, Table, Alert, Modal } from 'react-bootstrap';

const Header = () => {

    return (
        <header className="header">
            <div className="container">
                <h1>Hola, soy Emilio Yair Castillo Pacheco</h1>
                <p>Experimentado en la creacion de paginas web y desarrollo de software.</p>
                <button className="cta-button" data-bs-toggle="modal" data-bs-target="#exampleModal">Contactame</button>
            </div>

            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-scrollable">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">Enviame un correo!</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            ...
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                            <button type="button" class="btn btn-primary">Enviar</button>
                        </div>
                    </div>
                </div>
            </div>
        </header>

    );
};

export default Header;
