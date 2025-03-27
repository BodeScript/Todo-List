import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './LoginForm.css';

export default function LoginForm({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3001/api/auth/login', {
        username: username,
        password: password,
      });

      if (response.status >= 200 && response.status < 300) {
        console.log('Login bem-sucedido:', response.data);
        localStorage.setItem('userId', response.data.userId); // Armazena o userId
        onLogin();
        navigate('/home');
      } else {
        console.error('Erro no login:', response.data);
        alert('Nome de usuário ou senha incorretos.');
      }
    } catch (error) {
      console.error('Erro ao fazer a requisição de login:', error);
      alert('Ocorreu um erro ao tentar fazer login. Por favor, tente novamente mais tarde.');
    }
  };

  return (
    <div className="wrapper">
      <form onSubmit={handleLogin}>
        <h1>Bem-vindo de volta!</h1>
        <div className="input-box">
          <p>Usuário</p>
          <input
            type="text"
            placeholder="Digite seu nome de usuário"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="input-box">
          <p>Senha</p>
          <input
            type="password"
            placeholder="Digite sua senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Entrar</button>
        <div className="register">
          <p>Não tem uma conta? <a href="/register">Crie uma</a></p>
        </div>
      </form>
    </div>
  );
}