const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const validator = require('validator');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    lowercase: true,
    required: [true, 'Please tell us you name'],
    minlength: [3, 'Name must have more or equal then 3 characters'],
  },
  email: {
    type: String,
    lowercase: true,
    unique: true,
    required: [true, 'Please tell us your email'],
    validate: [validator.isEmail, 'Please provide a valid email'],
  },
  password: {
    type: String,
    required: [true, 'Please tell us your password'],
    minlength: [6, 'Password must have more or equal then 6 characters'],
  },

  role: {
    type: String,
    enum: ['user', 'owner', 'driver', 'admin'],
    default: 'user',
  },
  address: {
    phoneNumber: {
      type: String,
      min: [8, 'Phone number must be at least 8 numbers'],
    },
    firstLine: {
      type: String,
      minlength: [4, 'Address must have more or equal then 4 characters'],
    },
    secondLine: {
      type: String,
    },
    city: {
      type: String,
      minlength: [2, 'City must have more or equal then 2 characters'],
    },
    county: {
      type: String,
      minlength: [2, 'County must have more or equal then 2 characters'],
    },
    postcode: {
      type: String,
      minlength: [6, 'Postcode must have more or equal then 6 characters'],
    },
  },
  shippingAddress: {
    phoneNumber: {
      type: String,
      min: [8, 'Phone number must be at least 8 numbers'],
    },
    firstLine: {
      type: String,
      minlength: [4, 'Address must have more or equal then 4 characters'],
    },
    secondLine: {
      type: String,
    },
    city: {
      type: String,
      minlength: [2, 'City must have more or equal then 2 characters'],
    },
    county: {
      type: String,
      minlength: [2, 'County must have more or equal then 2 characters'],
    },
    postcode: {
      type: String,
      minlength: [6, 'Postcode must have more or equal then 6 characters'],
    },
  },
});

userSchema.pre('save', function (next) {
  bcrypt.hash(this.password, 10).then((hash) => {
    this.password = hash;

    next();
  });
});

userSchema.method('validatePassword', function (password) {
  return bcrypt.compare(password, this.password);
});

const User = mongoose.model('User', userSchema);

module.exports = User;
