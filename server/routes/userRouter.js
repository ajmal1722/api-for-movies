const express = require('express');
const router = express.Router()
const userController = require('../controller/userController');
const { protect  } = require('../middlewares/authMiddleware')

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - name
 *         - email
 *         - password
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the user
 *         name:
 *           type: string
 *           description: The name of the user
 *         email:
 *           type: string
 *           description: The email of the user
 *         isAdmin:
 *           type: boolean
 *           description: The admin status of the user
 *         password:
 *           type: string
 *           description: The password of the user
 *       example:
 *         id: "60d0fe4f5311236168a109ca"
 *         name: "John Doe"
 *         email: "john.doe@example.com"
 *         isAdmin: false
 *         password: "$2a$12$0zCk8d6IVtX.FF1bXaWVs.dlIqFqYc2pL4lHZK9Z5NP8QGPe2oJGy"
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 */

/**
 * @swagger
 * /:
 *   get:
 *     summary: Home route
 *     tags: [Home]
 *     responses:
 *       200:
 *         description: Welcome to the home route
 *         content:
 *           text/plain:
 *             schema:
 *               type: string
 *               example: "Welcome to the Home Route"
 */
router.get('/', userController.homeRoute);

/**
 * @swagger
 * /my-account:
 *   get:
 *     summary: Get the logged-in user's info
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: The user's info
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       401:
 *         description: Unauthorized
 */
router.get('/my-account', protect, userController.myAccount);

/**
 * @swagger
 * /user/signup:
 *   post:
 *     summary: Register a new user
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       201:
 *         description: User successfully registered
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       400:
 *         description: Bad request
 */
router.post('/user/signup', userController.userSignUp);

/**
 * @swagger
 * /user/login:
 *   post:
 *     summary: Log in a user
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *             example:
 *               email: "john.doe@example.com"
 *               password: "password123"
 *     responses:
 *       200:
 *         description: User successfully logged in
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *                 user:
 *                   $ref: '#/components/schemas/User'
 *       400:
 *         description: Invalid credentials
 */
router.post('/user/login', userController.userLogin);

module.exports = router