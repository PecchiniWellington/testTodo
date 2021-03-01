const mongoose = require("mongoose");
const config = require("config");
const db = config.get("mongoURI");

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useCreateIndex: true,
      useNewUrlParser: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    });
    console.log("MongoDB is connected...");
  } catch (error) {
    console.log("🚀 ~ file: db.js ~ line 14 ~ connectDB ~ error", error);
    process.exit();
  }
};

module.exports = connectDB;
