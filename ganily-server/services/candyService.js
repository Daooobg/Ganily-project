const Candy = require('../models/candyModel');
const factoryService = require('./factoryService');

exports.createOne = factoryService.createOne(Candy);
exports.getAll = factoryService.getAll(Candy);
exports.getOne = factoryService.getOne(Candy);
exports.updateOne = factoryService.updateOne(Candy);
exports.deleteOne = factoryService.deleteOne(Candy);
