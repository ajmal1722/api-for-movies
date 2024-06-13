const Movies = require('../collections/movieCollection')


/**
 * @desc Get Movies
 * @route GET /api/movies
 * @access Private
 */
const getMovies = async (req, res) => {
    try {
        const movies = await Movies.find()

        res.status(200).json({
            status: 'Success',
            totalMovies: movies.length,
            movies
        });
    } catch (error) {
        console.log('Error message:', error)
        res.status(500).json({ status: 'Failed', error: error.message })
    }
}

/**
 * @desc Set Movies
 * @route POST /api/movies
 * @access Private
 */
const createMovies = async (req, res) => {
    try {
       const movieData = req.body;

       const newMovie = await Movies.create(movieData)

        res.status(201).json({ status: 'Success', newMovie });
    } catch (error) {
        console.log('Error message:', error)
        res.status(500).json({ status: 'Failed', error: error.message })
    }
}

/**
 * @desc Upadate Movies
 * @route PUT /api/movies/:id
 * @access Private
 */
const updateMovies = async (req, res) => {
    try {
        // Find the movie by ID
        const movie = await Movies.findById(req.params.id)

        // If movie not found, return 404
        if (!movie) {
            return res.status(404).json({ status: 'Failed', error: 'Movie not found' });
        }

        // Update the movie with the new data
        const updatedMovie = await Movies.findByIdAndUpdate(req.params.id, req.body, {new: true});

        res.status(200).json({ status: 'Success', updatedMovie });
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
    getMovies,
    createMovies, 
    updateMovies,
    deleteMovie,
}