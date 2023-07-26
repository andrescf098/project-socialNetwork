const express = require("express");
const config = require("./config");
const routerApi = require("./routes");
const connect = require("./db");
const cors = require("cors");
const {
  boomErrorHandler,
  logErrors,
  errorHandler,
} = require("./middlewares/error.handler");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

routerApi(app);
connect();
app.listen(config.port, () => {
  console.log("Server is running on port: " + config.port);
});
require("./utils/auth.util");
app.use(boomErrorHandler);
app.use(logErrors);
app.use(errorHandler);
