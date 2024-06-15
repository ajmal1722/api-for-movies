const express = require('express');
const router = express.Router()
const movieController = require('../controller/movieController')
const { protect , isAdminAuth } = require('../middlewares/authMiddleware')

/**
 * @swagger
 * components:
 *   schemas:
 *     Movies:
 *       type: object
 *       required:
 *         - title
 *         - releasedYear
 *         - duration
 *         - genre
 *         - director
 *         - language
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the movie
 *         title:
 *           type: string
 *           description: The title of the movie
 *         releasedYear:
 *           type: string
 *           description: The year the movie was released
 *         duration:
 *           type: string
 *           description: The duration of the movie
 *         genre:
 *           type: array
 *           items:
 *             type: string
 *           description: The genres of the movie
 *         director:
 *           type: string
 *           description: The director of the movie
 *         language:
 *           type: array
 *           items:
 *             type: string
 *           description: The languages the movie is available in
 *       example:
 *         title: "Inception"
 *         releasedYear: "2010"
 *         duration: "148"
 *         genre: ["Action", "Adventure", "Sci-Fi"]
 *         director: "Christopher Nolan"
 *         language: ["English", "Japanese", "French"]
 */

/**
 * @swagger
 * /api/movies:
 *   get:
 *     summary: Get all the movies
 *     tags: [Movies]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Movie'
 *     responses:
 *       200:
 *         description: The movie was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Movie'
 *       500:
 *         description: Some server error
 */
router.get('/', movieController.getMovies)


/**
 * @swagger
 * /api/movies:
 *   post:
 *     summary: Create a new movie
 *     tags: [Movies]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Movie'
 *     responses:
 *       201:
 *         description: The movie was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Movie'
 *       500:
 *         description: Some server error
 */
router.post('/', protect, isAdminAuth, movieController.createMovies);

/**
 * @swagger
 * /api/movies/{id}:
 *   put:
 *     summary: Update an existing movie
 *     tags: [Movies]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The movie id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Movie'
 *     responses:
 *       200:
 *         description: The movie was successfully updated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Movie'
 *       404:
 *         description: The movie was not found
 *       500:
 *         description: Some server error
 */
router.put('/:id', protect, isAdminAuth, movieController.updateMovies)

/**
 * @swagger
 * /api/movies/{id}:
 *   delete:
 *     summary: Remove the movie by id
 *     tags: [Movies]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The movie id
 *     responses:
 *       200:
 *         description: The movie was deleted
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                 id:
 *                   type: string
 *       404:
 *         description: The movie was not found
 *       500:
 *         description: Some server error
 */
router.delete('/:id', protect, isAdminAuth, movieController.deleteMovie)

module.exports = router