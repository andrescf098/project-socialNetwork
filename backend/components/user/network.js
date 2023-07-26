const express = require("express");
const passport = require("passport");
const router = express.Router();
const UserController = require("./controller");
const uploadImage = require("../../utils/storage");
const {
  getUserSchema,
  createUserSchema,
  updateUserSchema,
} = require("./schema");
const {
  checkAuthorizedRoles,
  checkIdForUser,
} = require("../../middlewares/auth.handler");
const validatorHandler = require("../../middlewares/validation.handler");
const ROLES = require("../../utils/permissions.util");

const controller = new UserController();

router.get(
  "/",
  [
    passport.authenticate("jwt", { session: false }),
    checkAuthorizedRoles(...ROLES.admin),
  ],
  controller.list
);

router.get(
  "/user/:id",
  [
    passport.authenticate("jwt", { session: false }),
    validatorHandler(getUserSchema, "params"),
  ],
  controller.getById
);

router.get(
  "/avatar/:file",
  [passport.authenticate("jwt", { session: false })],
  controller.getAvatar
);

router.post(
  "/",
  [validatorHandler(createUserSchema, "body")],
  controller.create
);

router.patch(
  "/:id",
  [
    passport.authenticate("jwt", { session: false }),
    checkAuthorizedRoles(...ROLES.registeredUser),
    checkIdForUser(),
    validatorHandler(getUserSchema, "params"),
    validatorHandler(updateUserSchema, "body"),
  ],
  controller.update
);

router.post(
  "/upload",
  passport.authenticate("jwt", { session: false }),
  [uploadImage.single("file0")],
  controller.upload
);

router.delete(
  "/:id",
  [
    passport.authenticate("jwt", { session: false }),
    checkAuthorizedRoles(...ROLES.admin),
    validatorHandler(getUserSchema, "params"),
  ],
  controller.delete
);

module.exports = router;
