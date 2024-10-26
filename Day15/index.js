// server.js
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const authRoutes = require('./routes/authRoutes');
const bookRoutes = require('./routes/bookRoutes');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(morgan('dev'));

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log('MongoDB connection error:', err));

app.use('/auth', authRoutes);
app.use('/books', bookRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
