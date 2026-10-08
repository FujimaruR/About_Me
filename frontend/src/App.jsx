import { t as tr, useLocale } from './site/locale';
import { lazy, Suspense } from 'react';
import LocaleTools from './site/LocaleTools';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
const SobreMi = lazy(() => import('./pages/SobreMi'));
const Proyectos = lazy(() => import('./pages/Proyectos'));
const Contacto = lazy(() => import('./pages/Contacto'));
const Portafolio = lazy(() => import('./pages/Portafolio'));


function App() {
  useLocale();
  return (
    <Router>
      <LocaleTools />
      <Suspense fallback={<p role="status">{tr("ui.loading")}</p>}><Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="Home" element={<Home />} />
          <Route exact path="/EmilioCastillo" element={<SobreMi />}/>
          <Route exact path="/Proyectos" element={<Proyectos />}/>
          <Route exact path="/Contacto" element={<Contacto />}/>
          <Route exact path="/Portafolio/:id" element={<Portafolio />}/>
        </Route>
      </Routes></Suspense>
    </Router>
  );
}

export default App;
