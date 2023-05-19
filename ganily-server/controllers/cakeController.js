const cakeService = require('../services/cakeService');
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
