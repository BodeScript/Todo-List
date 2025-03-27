import React from "react";
import App from "../App";
import useDocumentTitle from "../useDocumentTitle";

const ToDo = () => {
  useDocumentTitle('Lista de Afazeres')
  return (
    <App />
  );
}

export default ToDo;
