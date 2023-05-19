const dotenv = require('dotenv');
const jwt = require('../lib/jsonwebtoken');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/AppError');

dotenv.config({ path: './config.env' });

const SECRET = process.env.JWT_SECRET;

exports.authentication = catchAsync(async (req, res, next) => {
  // console.log(req.header('Authorization').split(' ')[1])

  if (req.header('Authorization')) {
    const token = req.header('Authorization').split(' ')[1];
    if (token) {
      const decodedToken = await jwt.verify(token, SECRET);

      req.user = decodedToken;
    }
  }

  next();
});

exports.restrictTo = (...roles) => {
  return (req, res, next) => {
    if (!req.user) {
      return next(new AppError('You are not login', 403, req.body));
    }
    if (!roles.includes(req.user.role)) {
      return next(
        new AppError('You do not have permission to perform this action', 403)
      );
    }
    next();
  };
};
