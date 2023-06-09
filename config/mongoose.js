const mongoose = require('mongoose');

const db = main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1/testDb');
  console.log("Successfully connected to MongoDB");
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

module.exports = db;
