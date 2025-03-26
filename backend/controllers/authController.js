const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcrypt');
const prisma = new PrismaClient();

// Função para lidar com o login
const loginUser = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await prisma.user.findUnique({ where: { username } });

    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ message: 'Nome de usuário ou senha incorretos.' });
    }

    res.json({ message: 'Login realizado com sucesso!', userId: user.id });
  } catch (error) {
    console.error('Erro ao fazer login:', error);
    res.status(500).json({ message: 'Erro ao fazer login.' });
  }
};

// Função para lidar com o registro
const registerUser = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    // Verifique se já existe um usuário com esse nome de usuário
    const existingUser = await prisma.user.findUnique({ where: { username } });
    if (existingUser) {
      return res.status(409).json({ message: 'Nome de usuário já existe.' }); // 409 Conflict
    }

    // Gere o hash da senha
    const hashedPassword = await bcrypt.hash(password, 10);

    // Crie um novo usuário no banco de dados
    const newUser = await prisma.user.create({
      data: {
        username,
        email,
        password: hashedPassword,
      },
    });

    res.status(201).json({ message: 'Usuário registrado com sucesso!', userId: newUser.id }); // 201 Created
  } catch (error) {
    console.error('Erro ao registrar usuário:', error);
    res.status(500).json({ message: 'Erro ao registrar usuário.' });
  }
};

module.exports = {
  loginUser,
  registerUser,
};