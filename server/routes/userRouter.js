const express = require('express');
const router = express.Router()
const userController = require('../controller/userController');
const { protect  } = require('../middlewares/authMiddleware')

/**
 * @swagger
 * components:
 *   schemas:
 *     Users:
 *       type: object
 *       required:
 *         - name
 *         - email
 *         - password
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the movie
 *         name:
 *           type: string
 *           description: The name of the user
 *         email:
 *           type: string
 *           description: The email of user
 *         isAdmin:
 *           type: boolean
 *           description: The admin status of the user
 *         password:
 *           type: string
 *           description: The password of the user
 *       example:
 *         id: "60d0fe4f5311236168a109ca"
 *         name: "John Doe"
 *         email: "john@gmail.com"
 *         isAdmin: false
 *         password: "$2a$12$0zCk8d6IVtX.FF1bXaWVs.dlIqFqYc2pL4lHZK9Z5NP8QGPe2oJGy"
 */
router.get('/', userController.homeRoute);
router.get('/my-account', protect, userController.myAccount);
router.post('/user/signup', userController.userSignUp);
router.post('/user/login', userController.userLogin);

module.exports = router