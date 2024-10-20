const express =  require('express');
const movieRoutes = require('./routes/movieRoutes');
const errorHandle = require('./middleware/error')
const sequelize = require('./config/database');

const app = express();
app.use(express.json());
app.use(movieRoutes);
app.use(errorHandler);

sequelize.sync();  // Sync database

module.exports = app;