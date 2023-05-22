const Cake = require('../models/cakeModel');
const factoryService = require('./factoryService');

exports.createOne = factoryService.createOne(Cake);
exports.getAll = factoryService.getAll(Cake);
exports.getOne = factoryService.getOne(Cake);
exports.updateOne = factoryService.updateOne(Cake);
exports.deleteOne = factoryService.deleteOne(Cake);
