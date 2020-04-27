require('dotenv').config();

const PORT = process.env.PORT;
const urlMongo = process.env.MONGODB_URI;

module.exports = {
  urlMongo,
  PORT
}