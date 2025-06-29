const Footer = () => {
    return (
        <footer className="text-center p-4 border-top mt-5 text-white">
            <p className="mb-1">© {new Date().getFullYear()} Emilio Yair Castillo Pacheco</p>
            <small className="text-secondary">Built with Vite & React</small>
        </footer>
    );
};

export default Footer;