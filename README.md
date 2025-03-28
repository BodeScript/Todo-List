# To-Do List 

## 📝 Sobre o Projeto

O **To-Do List** é uma aplicação fullstack desenvolvida para auxiliar no gerenciamento de tarefas diárias, permitindo aos usuários criar, editar e excluir tarefas de forma intuitiva. O projeto utiliza uma stack moderna composta por React no frontend, Node.js com Express no backend e PostgreSQL como banco de dados, gerenciado pelo Prisma ORM.

## 🎯 Objetivo

Criar uma aplicação simples e eficiente para organização de tarefas, oferecendo funcionalidades como:

- Criar, editar e excluir tarefas
- Marcar tarefas como concluídas
- Filtragem e organização de tarefas

## 🚀 Tecnologias Utilizadas

### Frontend

- React 
- Axios (requisições HTTP)

### Backend

- Node.js
- Express
- Prisma ORM (gerenciamento de banco de dados)
- PostgreSQL (banco de dados relacional)

## 📋 Funcionalidades

- **Autenticação de usuários**: Registro e login
- **Gerenciamento de tarefas**: Criar, editar, excluir e marcar tarefas como concluídas
- **Persistência de dados**: Todas as informações são armazenadas em um banco de dados PostgreSQL

## 🛠️ Instalação e Configuração

### Pré-requisitos

- Node.js (v20+)
- npm ou yarn
- PostgreSQL instalado e configurado

### Frontend

```bash
# Clonar o repositório
git clone https://github.com/BodeScript/Todo-List

# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm start
```

### Backend

```bash
# Acessar o diretório do backend
cd backend

# Instalar dependências
npm install

# Configurar variáveis de ambiente
# Crie um arquivo .env com:
PORT=3001
DATABASE_URL=postgresql://usuario:senha@localhost:5432/todolist

# Rodar migrações do Prisma
npx prisma migrate dev

# Iniciar servidor
npm start
```

## 👥 Equipe de Desenvolvimento

- [Wendell](https://github.com/4ldric)
- [Kauan](https://github.com/kkauaoliveira)
- [Luiz](https://github.com/luizg-sptzu)
- [Rodrigo](https://github.com/rodrigoloiolac)



