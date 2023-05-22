const candyService = require('../services/candyService')
const factoryController = require('./factoryController');

exports.create = factoryController.createOne(candyService);
exports.getCandy = factoryController.getAll(candyService);
exports.getOne = factoryController.getOne(candyService);
exports.updateOne = factoryController.updateOne(candyService);
exports.deleteOne = factoryController.deleteOne(candyService);
