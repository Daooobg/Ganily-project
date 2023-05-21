const Cake = require('../models/cakeModel');
const slug = require('slug');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/AppError');
const APIFeatures = require('../utils/apiFeatures');

exports.create = async (data, user) => {
  data.ownerId = user._id;

  return await Cake.create(data);
};

// exports.getCakes = async (data) => {
//   return await Cake.find(data);
// };

exports.getCakes = async (queryData) => {
  const feature = new APIFeatures(Cake.find(), queryData)
    .filter()
    .sort()
    .limitFields()
    .paginate();
    return await feature.query;
};

exports.getOne = async (data) => {
  return await Cake.findOne({ slug: data });
};

exports.updateOne = async (slugData, data) => {
  if (data.name) {
    data.slug = slug(`${data.name}`, {
      lower: true,
    });
  }
  const cake = await Cake.findOneAndUpdate({ slug: slugData }, data, {
    new: true,
    runValidators: true,
  });
  return cake;
};

exports.deleteOne = (slugData) => Cake.findOneAndDelete({ slug: slugData });
