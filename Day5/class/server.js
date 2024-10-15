const express = require('express');
const mongoose = require('mongoose');
const studentRoutes = require('./routes/studentRoutes');  // Import routes

const app = express();
app.use(express.json());  // Middleware to parse JSON

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/newdb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.error('Failed to connect to MongoDB:', err);
});

// Use student routes for CRUD operations
app.use('/students', studentRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
