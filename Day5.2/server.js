const express = require('express');
const usersRoute = require('./routes/users');
const mongoose = require('mongoose');

const app = express();

// Middleware to parse JSON
app.use(express.json());

// Use the users route
app.use('/api', usersRoute);

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/dynamicQueriesDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
  });
