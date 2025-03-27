import React, { useState } from "react";
import { BrowserRouter as Router, Link, Routes, Route, Navigate } from "react-router-dom";
import ToDo from "./pages/Home";
import Entrar from "./pages/Login";
import Registrar from "./pages/Register";
import './AppPages.css';

const AppPages = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  return (
    <Router>
      <>
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path='/login' element={<Entrar onLogin={handleLoginSuccess} />} />
          <Route path='/register' element={<Registrar onRegister={() => setIsLoggedIn(true)} />} />
          <Route
            path='/home'
            element={isLoggedIn ? <ToDo /> : <Navigate to="/login" />}
          />
        </Routes>
      </>
    </Router>
  );
}

export default AppPages;