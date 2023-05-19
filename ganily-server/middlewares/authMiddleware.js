const dotenv = require('dotenv');
const jwt = require('../lib/jsonwebtoken');
const catchAsync = require('../utils/catchAsync');


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