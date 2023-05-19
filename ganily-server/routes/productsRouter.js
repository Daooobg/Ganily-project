const router = require('express').Router();

const cakeController = require('../controllers/cakeController');

router.route('/cakes').post(cakeController.create);

module.exports = router;
