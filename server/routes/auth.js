const express = require('express');

const authControllers = require('../controllers/auth');

const router = express.Router();

router.post('/send-otp', authControllers.sendOtp);

router.post('/login', authControllers.login);

module.exports = router;
