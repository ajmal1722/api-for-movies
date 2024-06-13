const Movies = require('../collections/movieCollection')

// @desc Get Movies
// @route GET /api/movies
// @access Private

/**
 * @desc Set Movies
 * @route POST /api/movies
 * @access Private
 */
const createMovies = async (req, res) => {
    try {
       const movieData = req.body;

       const newMovie = await Movies.create(movieData)

        res.status(201).json({ status: 'Success', movieData });
    } catch (error) {
        console.log('Error message:', error)
        res.status(500).json({ status: 'Failed', error: error.message })
    }
}

/**
 * @desc Delete Movies
 * @route DELETE /api/movies/:id
 * @access Private
 */
const deleteMovie = async (req, res) => {
    try {
        const id = req.params.id;
        
        const movie = await Movies.findByIdAndDelete(id);
        
        if (!movie) {
            return res.status(404).json({ status: 'Failed', error: 'Movie not found' });
        }

        res.status(200).json({ status: 'Success', id });
    } catch (error) {
        console.log('Error message:', error)
        res.status(500).json({ status: 'Failed', error: error.message })
    }
}

module.exports = { 
    createMovies, 
    deleteMovie,
}