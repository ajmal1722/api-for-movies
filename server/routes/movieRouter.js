const express = require('express');
const router = express.Router()
const movieController = require('../controller/movieController')

// Creating movies
router.post('/create', movieController.createMovies)

module.exports = router