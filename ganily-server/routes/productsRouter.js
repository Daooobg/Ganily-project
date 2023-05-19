const router = require('express').Router();

const cakeController = require('../controllers/cakeController');
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

module.exports = router;
