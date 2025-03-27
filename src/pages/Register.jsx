import React from "react";
import RegisterForm from "../Components/LoginReg/RegisterForm/RegisterForm";
import useDocumentTitle from "../useDocumentTitle";

const Registrar = () => {
  useDocumentTitle('Registro de Usuário')
  return (
    <RegisterForm />
  );
}

export default Registrar;
