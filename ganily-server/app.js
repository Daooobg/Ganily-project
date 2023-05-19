const express = require('express');
const cors = require('cors');

const userRouter = require('./routes/userRouter');
const productsRouter = require('./routes/productsRouter')
const authMiddleware = require('./middlewares/authMiddleware');


const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: false }));

app.use(express.json());

app.use(authMiddleware.authentication);

app.use('/api/v1/users', userRouter);
app.use('/api/v1/products', productsRouter);



module.exports = app;
