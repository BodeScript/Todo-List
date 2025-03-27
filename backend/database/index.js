const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',      // Substitua pelo seu usuário do PostgreSQL
  host: 'localhost',
  database: 'teste', // Substitua pelo nome do seu banco de dados
  password: 'admin',      // Substitua pela sua senha do PostgreSQL
  port: 5432,                 // Porta padrão do PostgreSQL
});

module.exports = pool;