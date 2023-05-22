const mongoose = require('mongoose');
const slug = require('slug');

const startUrl = /^(https?:\/)?\/.*/i;

const cakeSchema = new mongoose.Schema({
  name: {
    type: String,
    lowercase: true,
    require: [true, 'Please provide name'],
    minLength: [3, 'Name must be at least 3 characters'],
    unique: true,
  },
  types: [
    {
      type: String,
      enum: {
        values: [
          'fruit',
          'vegetable',
          'mixed',
          'chocolate',
          'dairy-free',
          'keto',
          'nut-free',
          'probiotic',
          'kids',
        ],
        message:
          'Cake types are fruit, vegetable, mixed, chocolate, dairy-free, keto, nut-free, probiotic, and kids',
      },
    },
  ],
  sizes: [
    {
      type: String,
      enum: {
        values: [
          '8 peaces',
          '10 peaces',
          '12 peaces',
          '14 peaces',
          '16 peaces',
        ],
        message: 'Cake sizes must be 8, 10, 12, 14, and 16 peaces',
      },
    },
  ],
  description: {
    type: String,
    required: [true, 'Please provide description'],
    minLength: [10, 'Description must be at least 10 characters'],
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
  price: {
    type: Number,
    required: [true, 'Please provide price'],
    min: [0, 'Cake price must be positive number'],
  },
  priceDiscount: {
    type: Number,
    default: 0,
  },
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

cakeSchema.pre('save', function (next) {
  this.slug = slug(`${this.name}`, {
    lower: true,
  });
  next();
});

const Cake = mongoose.model('Cake', cakeSchema);

module.exports = Cake;
