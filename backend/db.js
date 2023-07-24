const mongoose = require('mongoose');
require("dotenv").config();
const mongoURI = process.env.MONGO_URI;

const connectToMongo = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log('\x1b[42m%s\x1b[0m',"Connected to MongoDB Successfully");
  } catch (error) {
    console.error('\x1b[41m%s\x1b[0m',"Failed to connect to MongoDB Reason :\n", error);
  }
};

module.exports = connectToMongo;
