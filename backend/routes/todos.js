// backend/routes/todos.js
const express = require('express');
const router = express.Router();
const todosController = require('../controllers/todosController');

// Rotas para tarefas
router.get('/', todosController.getAllTodos);
router.get('/:id', todosController.getTodoById);
router.post('/', todosController.createTodo);
router.put('/:id', todosController.updateTodo);
router.delete('/:id', todosController.deleteTodo);

module.exports = router;