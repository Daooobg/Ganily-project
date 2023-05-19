const Cake = require('../models/cakeModel');
const slug = require('slug');

exports.create = async (data, user) => {
  data.ownerId = user._id;

  return await Cake.create(data);
};

exports.getCakes = async (data) => {
  return await Cake.find(data);
};

exports.getOne = async (data) => {
  return await Cake.find({ slug: data });
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

exports.deleteOne = async (slugData) => {
  return await Cake.findOneAndDelete({ slug: slugData });
};
