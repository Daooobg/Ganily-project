const router = require('express').Router();

const cakeController = require('../controllers/cakeController');

router.route('/cakes').post(cakeController.create).get(cakeController.getCakes);

module.exports = router;
