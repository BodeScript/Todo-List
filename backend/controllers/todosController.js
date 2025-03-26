// backend/controllers/todosController.js
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const getAllTodos = async (req, res) => {
  const userId = parseInt(req.query.userId); // Pegamos o userId da query string

  try {
    const todos = await prisma.todo.findMany({
      where: {
        userId: userId, // Filtramos as tarefas pelo userId
      },
      orderBy: { id: 'asc' },
    });
    res.status(200).json(todos);
  } catch (error) {
    console.error('Erro ao buscar tarefas:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
};

const getTodoById = async (req, res) => {
  const { id } = req.params;
  try {
    const todo = await prisma.todo.findUnique({
      where: { id: parseInt(id) },
    });
    if (todo) {
      res.status(200).json(todo);
    } else {
      res.status(404).json({ message: 'Tarefa não encontrada' });
    }
  } catch (error) {
    console.error('Erro ao buscar tarefa:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
};

const createTodo = async (req, res) => {
  const { title, description, completed, userId, category } = req.body;

  try {
    const newTodo = await prisma.todo.create({
      data: {
        title: title,
        description: description || null,
        completed: completed || false,
        userId: parseInt(userId), // Certifique-se de que userId seja um número inteiro
        category: category || null,
      },
    });
    res.status(201).json(newTodo); // Responde com a tarefa criada e status 201 (Created)
  } catch (error) {
    console.error("Erro ao criar tarefa:", error);
    res.status(500).json({ error: "Erro ao criar tarefa" }); // Responde com erro interno do servidor
  }
};

const updateTodo = async (req, res) => {
  const { id } = req.params;
  const { title, description, completed } = req.body;
  try {
    const updatedTodo = await prisma.todo.update({
      where: { id: parseInt(id) },
      data: {
        title,
        description,
        completed: completed === 'true', // Converter para booleano
        updatedAt: new Date(),
      },
    });
    res.status(200).json(updatedTodo);
  } catch (error) {
    console.error('Erro ao atualizar tarefa:', error);
    res.status(404).json({ message: 'Tarefa não encontrada' });
  }
};

const deleteTodo = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedTodo = await prisma.todo.delete({
      where: { id: parseInt(id) },
    });
    res.status(200).json({ message: 'Tarefa deletada com sucesso' });
  } catch (error) {
    console.error('Erro ao deletar tarefa:', error);
    res.status(404).json({ message: 'Tarefa não encontrada' });
  }
};

module.exports = {
  getAllTodos,
  getTodoById,
  createTodo,
  updateTodo,
  deleteTodo,
};