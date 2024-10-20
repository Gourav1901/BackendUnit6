const {DataTypes} = require('sequelize');
const sequelize = require('../config/database');

const Movie = sequelize.define('Movie', {
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  director: {
    type: DataTypes.STRING,
    allowNull: false
  },
  genre: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

module.exports = Movie;