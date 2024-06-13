const express = require('express');
const router = express.Router()
const movieController = require('../controller/movieController')

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


router.get('/', movieController.getMovies)



router.post('/', movieController.createMovies);


router.put('/:id', movieController.updateMovies)


router.delete('/:id', movieController.deleteMovie)

module.exports = router