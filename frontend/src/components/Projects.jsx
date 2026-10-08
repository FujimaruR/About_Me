import { useLocale as useSiteLocale, t as tr, text as localizeText } from '../site/locale';
import { Link } from 'react-router-dom';
import Card_Proyecto from './Card_Proyecto';
import proyectos from '../proyectos/projects';
export default function Projects() {
  useSiteLocale();
  return <section id="projects" className="section-wrap section-bg-2"><div className="container">
    <h2 className="section-title">{tr("text.8541c1877e")}</h2>
    <p className="section-subtitle">{tr("text.82a063f4ef")}</p>
    {['development','games'].map(category => <div key={category} className="mt-4">
      <h3 className="h4 fw-bold">{localizeText(category === 'games' ? 'Proyectos de videojuegos' : 'Proyectos de desarrollo')}</h3>
      <div className="row g-4">{proyectos.filter(p => (['2','3','4','6'].includes(String(p.ID_Proyecto)) ? 'games' : 'development') === category).slice(0,3).map(proyecto => <div key={proyecto.ID_Proyecto} className="col-12 col-md-6 col-lg-4"><Card_Proyecto proyecto={proyecto}/></div>)}</div>
    </div>)}
    <Link to="/Proyectos" className="btn btn-primary rounded-pill mt-4">{tr("text.d0d3d306c8")}</Link>
  </div></section>;
}
