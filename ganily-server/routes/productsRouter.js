const router = require('express').Router();

const cakeController = require('../controllers/cakeController');
const candyController = require('../controllers/candyController');
const authMiddleware = require('../middlewares/authMiddleware');

router.route('/cakes').post(cakeController.create).get(cakeController.getCakes);
router
  .route('/cakes/:slug')
  .get(cakeController.getOne)
  .patch(authMiddleware.restrictTo('admin', 'owner'), cakeController.updateOne)
  .delete(
    authMiddleware.restrictTo('admin', 'owner'),
    cakeController.deleteOne
  );

router
  .route('/candies')
  .post(candyController.create)
  .get(candyController.getCandy);
router
  .route('/candies/:slug')
  .get(candyController.getOne)
  .patch(authMiddleware.restrictTo('admin', 'owner'), candyController.updateOne)
  .delete(
    authMiddleware.restrictTo('admin', 'owner'),
    candyController.deleteOne
  );

module.exports = router;
