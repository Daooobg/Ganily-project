const mongoose = require('mongoose');
const slug = require('slug');

const startUrl = /^(https?:\/)?\/.*/i;

const candySchema = new mongoose.Schema({
  name: {
    type: String,
    lowercase: true,
    require: [true, 'Please provide name'],
    minLength: [3, 'Name must be at least 3 characters'],
    unique: true,
    trim: true,
  },
  price: {
    type: Number,
    require: [true, 'Please provide price'],
    min: [0, 'Price must be a positive number'],
  },
  boxSize: [
    {
      type: Number,
      min: [1, 'Box size must be minimum 1'],
    },
  ],
  priceDiscount: {
    type: Number,
    default: 0,
  },
  images: [
    {
      type: String,
      validate: {
        validator: (value) => startUrl.test(value),
        message: `Please add valid image URL`,
      },
    },
  ],
  logoDescription: [
    {
      type: String,
      enum: [
        'glutenFree',
        'sugarFree',
        'vegan',
        'keto',
        'paleo',
        'dairyFree',
        'nutFree',
        'soyFree',
        'diabetics',
        'probiotics',
      ],
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  slug: String,
  ownerId: {
    type: mongoose.Types.ObjectId,
    ref: 'User',
  },
});

candySchema.pre('save', function (next) {
  this.slug = slug(`${this.name}`, {
    lower: true,
  });
  next();
});

const Candy = mongoose.model('Candy', candySchema);

module.exports = Candy;
