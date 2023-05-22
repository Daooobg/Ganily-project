const AppError = require('../utils/AppError');
const catchAsync = require('../utils/catchAsync');

exports.createOne = (ModelService) =>
  catchAsync(async (req, res, next) => {
    const data = await ModelService.createOne(req.body, req.user);

    res.status(201).json({
      status: 'success',
      data: data,
    });
  });

exports.getAll = (ModelService) =>
  catchAsync(async (req, res, next) => {
    const data = await ModelService.getAll(req.query);

    res.status(200).json({
      status: 'success',
      result: data.length,
      data: data,
    });
  });

exports.getOne = (ModelService) =>
  catchAsync(async (req, res, next) => {
    const data = await ModelService.getOne(req.params.slug);

    if (!data) {
      return next(new AppError(`No data found for: ${req.params.slug}`, 404));
    }

    res.status(200).json({
      status: 'success',
      data: data,
    });
  });

exports.updateOne = (ModelService) =>
  catchAsync(async (req, res, next) => {
    const data = await ModelService.updateOne(req.params.slug, req.body);

    if (!data) {
      return next(new AppError(`No data found for: ${req.params.slug}`, 404));
    }

    res.status(200).json({
      status: 'success',
      data: data,
    });
  });

exports.deleteOne = (ModelService) =>
  catchAsync(async (req, res, next) => {
    const data = await ModelService.deleteOne(req.params.slug);

    if (!data) {
      return next(new AppError(`No data found for: ${req.params.slug}`, 404));
    }

    res.status(204).json({
      status: 'success',
      data: null,
    });
  });
