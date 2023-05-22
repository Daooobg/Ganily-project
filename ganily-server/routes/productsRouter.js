const router = require('express').Router();

const cakeController = require('../controllers/cakeController');
const candyController = require('../controllers/candyController');
const dessertController = require('../controllers/dessertController')
const iceScreamController = require('../controllers/iceCreamController')
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

  router
  .route('/desserts')
  .post(dessertController.create)
  .get(dessertController.getCandy);
router
  .route('/desserts/:slug')
  .get(dessertController.getOne)
  .patch(authMiddleware.restrictTo('admin', 'owner'), dessertController.updateOne)
  .delete(
    authMiddleware.restrictTo('admin', 'owner'),
    dessertController.deleteOne
  );

  router
  .route('/iceCreams')
  .post(iceScreamController.create)
  .get(iceScreamController.getCandy);
  router
  .route('/iceCreams/:slug')
  .get(iceScreamController.getOne)
  .patch(authMiddleware.restrictTo('admin', 'owner'), iceScreamController.updateOne)
  .delete(
    authMiddleware.restrictTo('admin', 'owner'),
    iceScreamController.deleteOne
  );

module.exports = router;
