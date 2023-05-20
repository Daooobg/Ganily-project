const cakeService = require('../services/cakeService');
const AppError = require('../utils/AppError');
const catchAsync = require('../utils/catchAsync');

exports.create = catchAsync(async (req, res, next) => {
  console.log('cake create');
  const data = await cakeService.create(req.body, req.user);
  res.status(200).json(data);
});

exports.getCakes = catchAsync(async (req, res, next) => {
  const data = await cakeService.getCakes(req.body);
  res.status(200).json(data);
});

exports.getOne = catchAsync(async (req, res, next) => {
  const data = await cakeService.getOne(req.params.slug);

  res.status(200).json(data[0]);
});

exports.updateOne = catchAsync(async (req, res, next) => {
  const data = await cakeService.updateOne(req.params.slug, req.body);
  res.status(200).json(data);
});

exports.deleteOne = catchAsync(async (req, res, next) => {
  const result = await cakeService.deleteOne(req.params.slug);
  if (result === null) {
    return res.status(404).json('Not found');
  }
  res.status(204).json('Deleted');
});
