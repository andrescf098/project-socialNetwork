const express = require("express");
const user = require("./user.routes");

function routerApi(app) {
  const router = express.Router();
  app.use("/api/v1", router);
  router.use("/user", user);
}

module.exports = routerApi;
