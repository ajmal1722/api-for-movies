const express = require('express');
const router = express.Router()
const movieController = require('../controller/movieController')

// Creating movies
router.post('/', movieController.createMovies)

// Deleting movies
router.delete('/:id', movieController.deleteMovie)

module.exports = router