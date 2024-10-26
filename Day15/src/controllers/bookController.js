// controllers/bookController.js
const Book = require('../models/Book');
const addBook = async (req, res) => {
  const book = new Book({ ...req.body, createdBy: req.user.id });
  await book.save();
  res.status(201).send(book);
};

const getBooks = async (req, res) => {
  const filter = {};
  if (req.query.old) filter.createdAt = { $lt: new Date(Date.now() - 10 * 60000) };
  if (req.query.new) filter.createdAt = { $gt: new Date(Date.now() - 10 * 60000) };

  const books = await Book.find(filter);
  res.json(books);
};

module.exports = { addBook, getBooks };
