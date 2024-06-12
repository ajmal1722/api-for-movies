const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    releasedYear: {
        type: String,
        required: true,
        trim: true
    },
    duration: {
        type: String,
        required: true,
        trim: true
    },
    genre: {
        type: [String],  // Array of strings
        required: true
    },
    director: {
        type: String,
        required: true,
        trim: true
    },
    language: {
        type: String,
        required: true,
        trim: true
    },
}, {
    timestamps: true 
});

const Movie = mongoose.model('Movie', movieSchema)

module.exports = Movie;