const router = require('express').Router();

const cakeController = require('../controllers/cakeController');

router.route('/cakes').post(cakeController.create).get(cakeController.getCakes);
router.route('/cakes/:slug').get(cakeController.getOne);

module.exports = router;
