const mongoose = require('mongoose');
const mongoURI = "mongodb://localhost:27017/iNotebook";

const connectToMongo = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log('\x1b[42m%s\x1b[0m',"Connected to MongoDB Successfully");
  } catch (error) {
    console.error('\x1b[41m%s\x1b[0m',"Failed to connect to MongoDB Reason :\n", error);
  }
};

module.exports = connectToMongo;
