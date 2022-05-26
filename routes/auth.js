const express = require('express');
const router = express.Router();

//controllers
const { registerControllers, loginControllers } = require('../controllers/authControllers');

//rutas de authentification
//http://localhost:3000/api/auth

router.post('/register', registerControllers);
router.post('/login', loginControllers);

module.exports = router;