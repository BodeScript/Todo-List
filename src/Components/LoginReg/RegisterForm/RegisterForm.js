import React from "react";
import './RegisterForm.css'

export default function RegisterForm() {
  return (
    <div className="wrapper-reg">
      <form action="">
        <h1>Registro de usuário</h1>
        <div className="input-box">
          <p>Nome de usuário</p>
          <input type="text" placeholder="Digite seu nome de usuário" />
        </div>
        <div className="input-box">
          <p>E-mail</p>
          <input type="text" placeholder="Digite seu endereço de e-mail" />
        </div>
        <div className="input-box">
          <p>Senha</p>
          <input type="password" placeholder="Digite sua senha" />
        </div>
        <div className="input-box">
          <p>Confirme a senha</p>
          <input type="password" placeholder="Digite novamente sua senha" />
        </div>
        <button className="btn" type="submit">Criar conta</button>
        <div className="register">
          <p>Já possui uma conta? <a href="/#">Entrar</a></p>
        </div>
      </form>
    </div>
  )
}
