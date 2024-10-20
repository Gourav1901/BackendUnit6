const express = require('express');
const movieController = require("../controller/movieController");

const router = express.Router();
router.get('movies',movieController.getAllMovies);
router.post('/movies',movieController.creatMovies);
module.exports = router;