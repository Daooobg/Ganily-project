const mongoose = require('mongoose');
const dotenv = require('dotenv');

const app = require('./app');

dotenv.config({ path: 'config.env' });

const DB = process.env.DATABASE;

mongoose.set('strictQuery', false);
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('DB connected successfully!');
  });

const port = process.env.PORT || 5050;
const server = app.listen(port, () => {
  console.log(`App is running on port: ${port}`);
});

process.on('unhandledRejection', (err) => {
  console.log(err.name, err.message);
  console.log('UNHANDLED REJECTION!!!! Shutting down....');
  server.close(() => {
    process.exit(1);
  });
});
