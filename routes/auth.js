const express = require('express');

const authControllers = require('../controllers/auth');

const router = express.Router();

router.get('/get-origin', authControllers.getOrigin);

router.post('/login', authControllers.login);

module.exports = router;
