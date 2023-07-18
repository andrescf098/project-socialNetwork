const db = require("mongoose");
const config = require("../config");

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const URI = `mongodb+srv://${USER}:${PASSWORD}@cluster0.vde6448.mongodb.net/${config.db}?retryWrites=true&w=majority`;
db.Promise = global.Promise;

const connect = async () => {
  try {
    const connectionDB = await db.connect(URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    if (connectionDB) {
      console.log("Connect to database successfully");
    }
  } catch (error) {
    throw new Error(error);
  }
};
module.exports = connect;
