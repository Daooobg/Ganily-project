const mongoose = require('mongoose');
const slug = require('slug');

const startUrl = /^(https?:\/)?\/.*/i;

const iceCreamSchema = new mongoose.Schema({
  name: {
    type: String,
    lowercase: true,
    require: [true, 'Please provide name'],
    minLength: [3, 'Name must be at least 3 characters'],
    unique: true,
  },
  type: {
    type: String,
    enum: {
      values: ['sorbet', 'stick'],
      message: 'Ice cream types are: sorbet and stick',
    },
  },
  boxSize: [
    {
      type: Number,
      min: [1, 'Box size must be minimum 1'],
    },
  ],
  price: {
    type: Number,
    required: [true, 'Please provide price'],
    min: [0, 'Cake price must be positive number'],
  },
  priceDiscount: {
    type: Number,
    default: 0,
  },
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
  images: [
    {
      type: String,
      validate: {
        validator: (value) => startUrl.test(value),
        message: `Please add valid image URL`,
      },
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

iceCreamSchema.pre('save', function (next) {
  this.slug = slug(`${this.name}`, {
    lower: true,
  });
  next();
});

const IceCream = mongoose.model('IceCream', iceCreamSchema);

module.exports = IceCream;
