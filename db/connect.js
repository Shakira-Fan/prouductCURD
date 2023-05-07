const mongoose = require('mongoose');

const connectDb = () => {
  return mongoose.connect('mongodb://localhost:27017', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  });
};

module.exports = connectDb;
