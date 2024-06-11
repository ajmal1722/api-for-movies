const express = require('express');
const router = express.Router()
const userController = require('../controller/userController');

router.get('/', userController.homeRoute);
router.get('/user/login', userController.userLogin);

module.exports = router