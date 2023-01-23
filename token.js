const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  DB_HOST: process.env.DB_HOST,
  SECRET_KEY: process.env.SECRET_KEY,
  SEND_GRIP_API_KEY: process.env.SEND_GRIP_API_KEY,
  SEND_GRIP_EMAIL: process.env.SEND_GRIP_EMAIL,
};
