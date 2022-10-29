const express = require('express');

const usersControllers = require('../controllers/users')

const router = express.Router();

router.post('/add-user', usersControllers.addUser);

router.get('/user/:id', usersControllers.userById);

router.post('/user/edit', usersControllers.editUser);

module.exports = router;
