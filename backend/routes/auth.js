const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController'); // Importe o controlador de autenticação

// Rota para login
router.post('/login', authController.loginUser);

// Rota para registro
router.post('/register', authController.registerUser); // Adicione esta linha

module.exports = router;