const express = require('express');
const router = express.Router()
const userController = require('../controller/userController');
const { protect } = require('../middlewares/authMiddleware')

router.get('/', protect, userController.homeRoute);
router.get('/', protect, userController.homeRoute);
router.post('/user/signup', userController.userSignUp);
router.post('/user/login', userController.userLogin);

module.exports = router