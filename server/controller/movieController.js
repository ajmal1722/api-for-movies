const Movies = require('../collections/movieCollection')

// create movies
const createMovies = async (req, res) => {
    try {
       const movieData = req.body;

       const newMovie = await Movies.create(movieData)

        res.status(201).json({ status: 'Success', movieData });
    } catch (error) {
        console.log('Error message:', error)
        res.status(500).json({ error: error.message })
    }
}

module.exports = { createMovies}