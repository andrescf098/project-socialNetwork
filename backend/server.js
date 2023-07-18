const express = require("express");
const config = require("./config");
const routerApi = require("./routes");
const connect = require("./db");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

routerApi(app);
connect();
app.listen(config.port, () => {
  console.log("Server is running on port: " + config.port);
});
