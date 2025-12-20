const Footer = () => {
  return (
    <footer className="footer-wrap">
      <div className="container">
        <div className="row align-items-center gy-3">
          
          {/* Left */}
          <div className="col-12 col-md-6 text-center text-md-start">
            <div className="footer-name">
              Emilio Yair Castillo Pacheco
            </div>
            <div className="footer-role">
              Full Stack Developer · Backend Focus
            </div>
          </div>

          {/* Right */}
          <div className="col-12 col-md-6 text-center text-md-end">
            <div className="footer-links">
              <a href="mailto:yair.castillo.p1@gmail.com">Email</a>
              <a href="https://github.com/FujimaruR" target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a href="https://about-me-u9m4.vercel.app" target="_blank" rel="noreferrer">
                Portfolio
              </a>
            </div>
          </div>

        </div>

        {/* Bottom line */}
        <div className="footer-bottom">
          © {new Date().getFullYear()} · Built with React & Vite
        </div>
      </div>
    </footer>
  );
};

export default Footer;
