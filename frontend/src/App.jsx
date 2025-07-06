import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SobreMi from './pages/SobreMi';
import Proyectos from './pages/Proyectos';
import Contacto from './pages/Contacto';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="Home" element={<Home />} />
          <Route exact path="/EmilioCastillo" element={<SobreMi />}/>
          <Route exact path="/Proyectos" element={<Proyectos />}/>
          <Route exact path="/Contacto" element={<Contacto />}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;