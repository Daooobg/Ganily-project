const iceCreamService = require('../services/iceCreamService')
const factoryController = require('./factoryController');

exports.create = factoryController.createOne(iceCreamService);
exports.getCandy = factoryController.getAll(iceCreamService);
exports.getOne = factoryController.getOne(iceCreamService);
exports.updateOne = factoryController.updateOne(iceCreamService);
exports.deleteOne = factoryController.deleteOne(iceCreamService);