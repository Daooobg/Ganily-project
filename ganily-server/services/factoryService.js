const slug = require('slug');
const APIFeatures = require('../utils/apiFeatures');

exports.createOne = (Model) => async (data, user) => {
  data.ownerId = user._id;

  return await Model.create(data);
};

exports.getAll = (Model) => async (queryData) => {
  const feature = new APIFeatures(Model.find(), queryData)
    .filter()
    .sort()
    .limitFields()
    .paginate();
  return await feature.query;
};

exports.getOne = (Model) => async (data) => {
  return await Model.findOne({ slug: data });
};

exports.updateOne = (Model) => async (slugData, data) => {
  if (data.name) {
    data.slug = slug(`${data.name}`, {
      lower: true,
    });
  }
  const result = await Model.findOneAndUpdate({ slug: slugData }, data, {
    new: true,
    runValidators: true,
  });
  return result;
};

exports.deleteOne = (Model) => (slugData) =>
Model.findOneAndDelete({ slug: slugData });
