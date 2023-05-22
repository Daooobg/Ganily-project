const dessertService = require('../services/dessertService')
const factoryController = require('./factoryController');

exports.create = factoryController.createOne(dessertService);
exports.getCandy = factoryController.getAll(dessertService);
exports.getOne = factoryController.getOne(dessertService);
exports.updateOne = factoryController.updateOne(dessertService);
exports.deleteOne = factoryController.deleteOne(dessertService);
