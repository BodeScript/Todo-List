import React from "react";
import LoginForm from "../Components/LoginReg/LoginForm/LoginForm";

const Entrar = ({ onLogin }) => { // Recebe a prop onLogin aqui
  return (
    <LoginForm onLogin={onLogin} /> // Passa a prop onLogin para LoginForm
  );
}

export default Entrar;