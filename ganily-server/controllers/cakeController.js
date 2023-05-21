const cakeService = require('../services/cakeService');
const AppError = require('../utils/AppError');
const catchAsync = require('../utils/catchAsync');

exports.create = catchAsync(async (req, res, next) => {
  const data = await cakeService.create(req.body, req.user);

  res.status(201).json({
    status: 'success',
    data: data,
  });
});

exports.getCakes = catchAsync(async (req, res, next) => {
  const data = await cakeService.getCakes(req.query);

  res.status(200).json({
    status: 'success',
    result: data.length,
    data: data,
  });
});

exports.getOne = catchAsync(async (req, res, next) => {
  const data = await cakeService.getOne(req.params.slug);

  res.status(200).json({
    status: 'success',
    data: data,
  });
});

exports.updateOne = catchAsync(async (req, res, next) => {
  const data = await cakeService.updateOne(req.params.slug, req.body);

  res.status(200).json({
    status: 'success',
    data: data,
  });
});

exports.deleteOne = catchAsync(async (req, res, next) => {
  const result = await cakeService.deleteOne(req.params.slug);
  if (result === null) {
    return res.status(404).json('Not found');
  }

  res.status(204).json({
    status: 'success',
    data: null,
  });
});
