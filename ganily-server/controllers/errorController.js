const AppError = require('../utils/AppError');

const sendError = (err, res) => {
  if (err.isOperational) {
    res.status(err.statusCode).json({
      status: err.status,
      message: err.message,
    });
  } else {
    res.status(500).json({
      status: 'error',
      message: 'Something went very wrong!',
    });
  }
};

const handleCastError = (err) => {
  const message = `Invalid ${err.path}: ${err.value}.`;
  return new AppError(message, 400);
};

const handleValidationError = (err) => {
  const errors = Object.values(err.errors).map((el) => el.message);
  //   console.log(errors.join('. '));
  const message = `Invalid input data: ${errors.join('. ')}`;
  return new AppError(message, 400);
};

const handleDuplicateFields = (err) => {
  // console.log(err.keyValue.name);
  const value = err.errmsg.match(/(["'])(\\?.)*?\1/)[0];
  //   console.log(value);

  const message = `Duplicate field value: (${value}). Please use another value!`;
  return new AppError(message, 400);
};

const handleTokenExpiredError = () =>
  new AppError('Your token has expired. Please log in again!', 401);

const handleJWTError = () =>
  new AppError('Invalid token. Please log in again!', 401);

module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || 'error';
  console.log(err);

  if (err.name === 'ValidationError') {
    err = handleValidationError(err);
  }
  if (err.name === 'CastError') {
    err = handleCastError(err);
  }

  if (err.code === 11000) {
    err = handleDuplicateFields(err);
  }

  if (err.name === 'TokenExpiredError') {
    err = handleTokenExpiredError();
  }

  if (err.name === 'JsonWebTokenError') {
    err = handleJWTError();
  }

  sendError(err, res);
};
