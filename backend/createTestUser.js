const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcrypt');

const prisma = new PrismaClient();

async function main() {
  const username = 'alison'; // Escolha um nome de usuário para teste
  const password = 'alison123456'; // Escolha uma senha para teste

  // Gere o hash da senha
  const hashedPassword = await bcrypt.hash(password, 10); // O '10' é o número de rounds de hashing

  try {
    // Crie um novo usuário no banco de dados
    const newUser = await prisma.user.create({
      data: {
        username,
        password: hashedPassword,
      },
    });
    console.log('Usuário de teste criado com sucesso:', newUser);
  } catch (error) {
    console.error('Erro ao criar usuário de teste:', error);
  } finally {
    await prisma.$disconnect();
  }
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });