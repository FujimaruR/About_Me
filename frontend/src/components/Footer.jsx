import { useLocale as useSiteLocale, t as tr } from '../site/locale';
const Footer = () => {
  useSiteLocale();
  return (
    <footer className="footer-wrap">
      <div className="container">
        <div className="row align-items-center gy-3">

          {/* Left */}
          <div className="col-12 col-md-6 text-center text-md-start">
            <div className="footer-name"> {tr("text.5ed99b7148")} </div>
            <div className="footer-role"> {tr("text.f16a8cf3e7")} </div>
          </div>

          {/* Right */}
          <div className="col-12 col-md-6 text-center text-md-end">
            <div className="footer-links">
              <a href="mailto:yair.castillo.p1@gmail.com">{tr("text.84add5b295")}</a>
              <a href="https://github.com/FujimaruR" target="_blank" rel="noreferrer"> {tr("text.5442e2b64f")} </a>
              <a href="https://about-me-u9m4.vercel.app" target="_blank" rel="noreferrer"> {tr("text.036b18f02a")} </a>
            </div>
          </div>

        </div>

        {/* Bottom line */}
        <div className="footer-bottom">
          © {new Date().getFullYear()} {tr("text.3c2a8144c2")} </div>
      </div>
    </footer>
  );
};

export default Footer;
