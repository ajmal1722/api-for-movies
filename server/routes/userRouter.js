const express = require('express');
const router = express.Router()
const userController = require('../controller/userController');

router.get('/', userController.homeRoute);
router.post('/user/signup', userController.userSignUp);

module.exports = router