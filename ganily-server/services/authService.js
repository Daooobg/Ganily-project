const User = require('../models/userModel');
const dotenv = require('dotenv');
const jwt = require('../lib/jsonwebtoken');

dotenv.config({ path: './config.env' });

const SECRET = process.env.JWT_SECRET;
const EXPIRES_IN = process.env.JWT_EXPIRES_IN;

const createAndSendToken = async (user) => {
  const payload = { name: user.name, email: user.email, _id: user._id };
  const token = await jwt.sign(payload, SECRET, { expiresIn: EXPIRES_IN });

  const response = {
    AccessToken: token,
    name: user.name,
    email: user.email,
    userId: user._id,
  };
  return response;
};

exports.register = async (name, email, password, repeatPassword) => {
  const user = await User.create({ name, email, password, repeatPassword });
  return createAndSendToken(user);
};
