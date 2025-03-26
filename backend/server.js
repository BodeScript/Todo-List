// backend/server.js
const express = require('express');
const bodyParser = require('body-parser');
const todosRoutes = require('./routes/todos');
const authRoutes = require('./routes/auth'); // Importe as rotas de autenticação

const app = express();
const port = 3000;

// Middleware para analisar o corpo das requisições
app.use(bodyParser.json());

// Middleware para lidar com CORS
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

// Usar as rotas de tarefas
app.use('/api/todos', todosRoutes);

// Usar as rotas de autenticação
app.use('/api/auth', authRoutes); // Use as rotas de autenticação

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});