require("dotenv").config();

const config = {
  port: process.env.PORT || 3000,
  db: process.env.DB,
  dbUser: process.env.DB_USER,
  dbPassword: process.env.DB_PASSWORD,
};

module.exports = config;
