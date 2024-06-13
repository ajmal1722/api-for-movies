const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Title is required'],
        trim: true
    },
    releasedYear: {
        type: String,
        required: [true, 'Released year is required'],
        trim: true
    },
    duration: {
        type: String,
        required: [true, 'Duration is required'],
        trim: true
    },
    genre: {
        type: [String],
        required: [true, 'Genre is required']
    },
    director: {
        type: String,
        required: [true, 'Director is required'],
        trim: true
    },
    language: {
        type: [String],
        required: [true, 'Language is required'],
        trim: true
    },
}, {
    timestamps: true 
});

const Movie = mongoose.model('Movie', movieSchema)

module.exports = Movie;