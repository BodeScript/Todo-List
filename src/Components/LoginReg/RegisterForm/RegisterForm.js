import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './RegisterForm.css';
import { CiUser } from "react-icons/ci";
import { CiLock } from "react-icons/ci";
import { CiMail } from "react-icons/ci";

export default function RegisterForm() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert('As senhas não coincidem.');
      return;
    }

    try {
       const response = await axios.post("http://localhost:3001/api/auth/register", {
          username: username,
          email: email,
          password: password,
       });

       if (response.status >= 200 && response.status < 300) {
          console.log("Registro bem-sucedido:", response.data);
          localStorage.setItem("userId", response.data.userId); // Armazena o userId
          alert(
             "Conta criada com sucesso! Você será redirecionado para a página de login."
          );
          navigate("/login");
       } else {
          // Aqui podemos lidar com outros erros que não sejam o 409
          console.error("Erro no registro:", response.data);
          alert(
             response.data.message ||
                "Ocorreu um erro ao tentar criar a conta. Por favor, tente novamente mais tarde."
          );
       }
    } catch (error) {
       console.error("Erro ao fazer a requisição de registro:", error);

      
       if (error.response && error.response.status === 409) {
          alert("Nome de usuário já existe. Por favor, escolha outro.");
       } else {
          
          alert(
             "Ocorreu um erro ao tentar criar a conta. Por favor, tente novamente mais tarde."
          );
       }
    }
  };

  return (
    <div className="wrapper-reg">
      <form onSubmit={handleRegister}>
        <h1>Registro de usuário</h1>
        <div className="input-box">
          <p>
            <CiUser />
            <span> Nome de usuário</span>
          </p>
          <input
            type="text"
            placeholder="Digite seu nome de usuário"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="input-box">
          <p>
            <CiMail />
            <span> E-mail</span>
          </p>
          <input
            type="text"
            placeholder="Digite seu endereço de e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input-box">
          <p>
            <CiLock />
            <span> Senha</span>
          </p>
          <input
            type="password"
            placeholder="Digite sua senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="input-box">
          <p>
            <CiLock />
            <span> Senha</span>
          </p>
          <input
            type="password"
            placeholder="Digite novamente sua senha"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Criar conta</button>
        <div className="register">
          <p>Já possui uma conta? <a href="/login">Entrar</a></p>
        </div>
      </form>
    </div>
  );
}