const IceCream = require('../models/iceCreamModel');
const factoryService = require('./factoryService');

exports.createOne = factoryService.createOne(IceCream);
exports.getAll = factoryService.getAll(IceCream);
exports.getOne = factoryService.getOne(IceCream);
exports.updateOne = factoryService.updateOne(IceCream);
exports.deleteOne = factoryService.deleteOne(IceCream);