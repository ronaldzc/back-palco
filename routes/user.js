const express = require('express');
const router = express.Router();

//controllers
const {getUsers, getUser, createUser, updateUser, deleteUser} = require('../controllers/userControllers');

router.get('/', getUsers);

router.post('/', createUser);
router.get('/:id', getUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

module.exports = router;