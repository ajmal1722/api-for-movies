const express = require('express');
const router = express.Router()
const userController = require('../controller/userController');
const { protect } = require('../middlewares/authMiddleware')

router.get('/', userController.homeRoute);
router.get('/my-account', protect, userController.myAccount);
router.post('/user/signup', userController.userSignUp);
router.post('/user/login', userController.userLogin);

module.exports = router