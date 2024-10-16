const mongoose = require('mongoose');
const movieSchema = new mongoose.Schema({
  title: { type: String, required: true },
  rating: { type: Number, required: true },
  genre: { type: String, required: true },
  releaseDate: { type: Date, default: Date.now }
});

const Movie = mongoose.model('Movie',moviesSchema);

module.exports = Movie;