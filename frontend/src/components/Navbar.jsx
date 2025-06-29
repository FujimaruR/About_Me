const Navbar = () => {
    return (
        <header className="d-flex justify-content-between align-items-center p-4 border-bottom flex-wrap">
            <h3 className="text-primary">Emilio Yair Castillo Pacheco</h3>
            <nav className="mt-2 mt-md-0">
                <a href="#about" className="mx-2 text-white d-inline-block">Sobre mi</a>
                <a href="#projects" className="mx-2 text-white d-inline-block">Proyectos</a>
                <a href="#skills" className="mx-2 text-white d-inline-block">Contacto</a>
            </nav>
        </header>
    );
};

export default Navbar;