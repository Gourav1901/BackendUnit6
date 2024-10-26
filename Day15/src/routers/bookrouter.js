// routes/bookRoutes.js
const express = require('express');
const { addBook, getBooks } = require('../controllers/bookController');
const { authenticateToken } = require('../middlewares/authMiddleware');
const { authorizeRole } = require('../middlewares/roleMiddleware');
const router = express.Router();

router.post('/', authenticateToken, authorizeRole(['CREATOR']), addBook);
router.get('/', authenticateToken, authorizeRole(['VIEW_ALL', 'VIEWER']), getBooks);

module.exports = router;
