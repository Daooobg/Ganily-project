const Dessert = require('../models/dessertsModel');
const factoryService = require('./factoryService');

exports.createOne = factoryService.createOne(Dessert);
exports.getAll = factoryService.getAll(Dessert);
exports.getOne = factoryService.getOne(Dessert);
exports.updateOne = factoryService.updateOne(Dessert);
exports.deleteOne = factoryService.deleteOne(Dessert);
