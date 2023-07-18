const express = require("express");
const router = express.Router();
const UserService = require("../components/user/service");
const validatorHandler = require("../middlewares/validation.handler");
const {
  getUserSchema,
  createUserSchema,
  updateUserSchema,
} = require("../components/user/schema");

const service = new UserService();

router.get("/", async (req, res) => {
  try {
    res.status(200).json(await service.find());
  } catch (error) {
    console.error(error.message);
  }
});
router.post("/", [
  validatorHandler(createUserSchema),
  async (req, res, next) => {
    try {
      const body = req.body;
      res.status(201).json(await service.create(body));
    } catch (error) {
      next(error);
    }
  },
]);

module.exports = router;
