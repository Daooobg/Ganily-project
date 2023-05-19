const Cake = require('../models/cakeModel');

exports.create = async (data, user) => {
  data.ownerId = user._id;

  return await Cake.create(data);
};
