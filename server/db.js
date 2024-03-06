// Set up mongoose connection
const mongoose = require("mongoose");
require("dotenv").config();

mongoose.set("strictQuery", false);

const devURL =
  "mongodb+srv://savvyplus018:imooje@divineproject.vygwqqs.mongodb.net/calendarApp?retryWrites=true&w=majority&appName=divineProject";
const mongoDB = process.env.MONGODB_URI || devURL;

dataBase().catch((err) => console.log(err));
async function dataBase() {
  await mongoose.connect(mongoDB);
}

module.exports = { dataBase };
