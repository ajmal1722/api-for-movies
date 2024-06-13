const express = require('express');
const router = express.Router()
const movieController = require('../controller/movieController')

// GET movies
router.get('/', movieController.getMovies)

// Creating movies
router.post('/', movieController.createMovies)

// Update movie
router.put('/', movieController.updateMovies)

// Deleting a movie
router.delete('/:id', movieController.deleteMovie)

module.exports = router