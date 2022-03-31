const mongoose = require('mongoose');
const constants = require('../configure/constants')

const connectDB = () => {
  mongoose.connect(constants.connection, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  mongoose.connection.once('open', () => {
    console.log('connected to database');
  });
  mongoose.connection.on('error', console.error);
}

module.exports = connectDB;