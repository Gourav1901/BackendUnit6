// controllers/authController.js
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const { JWT_SECRET } = process.env;

const login = async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  if (!user) return res.status(400).send('Invalid Credentials');

  const validPassword = await bcrypt.compare(password, user.password);
  if (!validPassword) return res.status(400).send('Invalid Credentials');

  const token = jwt.sign({ id: user._id, roles: user.roles }, JWT_SECRET, {
    expiresIn: '1h',
  });
  res.json({ token });
};

module.exports = { login };
