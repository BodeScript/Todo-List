import React from "react";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import ToDo from "./pages/Home";
import Entrar from "./pages/Login";
import Registrar from "./pages/Register";
import './AppPages.css';

const AppPages = () => {
  return (
  <Router>
    <>
      <nav>
        <ul className="ul">
          <li className="li">
            <Link to='/'><button>Página inicial</button></Link>
          </li>
          <li className="li">
            <Link to='/login'><button>Entrar</button></Link>
          </li>
          <li className="li">
            <Link to='/register'><button>Criar conta</button></Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path='/' element={<ToDo />} />
        <Route path='/login' element={<Entrar />} />
        <Route path='/register' element={<Registrar />} />
      </Routes>
    </>
  </Router>
  );
}

export default AppPages;
