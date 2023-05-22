const cakeService = require('../services/cakeService');
const factoryController = require('./factoryController');

exports.create = factoryController.createOne(cakeService);
exports.getCakes = factoryController.getAll(cakeService);
exports.getOne = factoryController.getOne(cakeService);
exports.updateOne = factoryController.updateOne(cakeService);
exports.deleteOne = factoryController.deleteOne(cakeService);
