import React from "react";
import LoginForm from "../Components/LoginReg/LoginForm/LoginForm";
import useDocumentTitle from "../useDocumentTitle";

const Entrar = ({ onLogin }) => { // Recebe a prop onLogin aqui
  useDocumentTitle('Bem-vindo de volta!')
  return (
    <LoginForm onLogin={onLogin} /> // Passa a prop onLogin para LoginForm
  );
}

export default Entrar;