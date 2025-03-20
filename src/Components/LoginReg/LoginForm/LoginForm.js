import React from "react";
import './LoginForm.css'

export default function LoginForm() {
  return (
    <div className="wrapper">
      <form action="">
        <h1>Bem-vindo de volta!</h1>
        <div className="input-box">
          <p>Usuário</p>
          <input type="text" placeholder="Digite seu nome de usuário" />
        </div>
        <div className="input-box">
          <p>Senha</p>
          <input type="password" placeholder="Digite sua senha" />
        </div>
        <button type="submit">Entrar</button>
        <div className="register">
          <p>Não tem uma conta? <a href="/#">Crie uma</a></p>
        </div>
      </form>
    </div>
  )
}
