const express = require('express');
const router = express.Router()
const userController = require('../controller/userController');

router.get('/', userController.homeRoute);
router.post('/user/signup', userController.userSignUp);
router.post('/user/login', userController.userLogin);

module.exports = router