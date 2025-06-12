const express = require('express');
const router = express.Router();
const userApi = require('../API/user');

router.post('/login', userApi.login);
router.post('/users', userApi.criarUsuario);

router.use(userApi.validarToken);

router.get('/users', userApi.listarUsuario);
router.put('/users/:id', userApi.alterarUsuario);
router.delete('/users/:id', userApi.deletarUsuario);

module.exports = router;
