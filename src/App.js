import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom'
import Home from './components/pages/Home'
import Company from './components/pages/Company'
import Contact from './components/pages/Contact'
import NewProject from './components/pages/NewProject'

import Container from './components/layout/Container'

function App() {
  return (
    <Router>
      <div>
        <Link to="/">Home</Link>
        <Link to="/company">Empresa</Link>
        <Link to="/contact">Contacto</Link>
        <Link to="/newproject">Novo Projecto</Link>
      </div>

      <Routes> 
          <Route exact path='/' element={<Home />} />
          <Route exact path='/company' element={<Company />} />
          <Route exact path='/contact' element={<Contact />} />
          <Route exact path='/newproject' element={<NewProject />} /> 
      </Routes>
      <p>Footer</p>
    </Router >
  );
}

export default App;
