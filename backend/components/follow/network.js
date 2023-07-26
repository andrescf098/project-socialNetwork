const express = require("express");
const router = express.Router();
const FollowController = require("./controller");
const passport = require("passport");
const controller = new FollowController();

router.get(
  "/following",
  [passport.authenticate("jwt", { session: false })],
  controller.following
);

router.get(
  "/followers",
  [passport.authenticate("jwt", { session: false })],
  controller.followers
);

router.post(
  "/",
  [passport.authenticate("jwt", { session: false })],
  controller.save
);

router.delete(
  "/unfollow/:id",
  [passport.authenticate("jwt", { session: false })],
  controller.unfollow
);

module.exports = router;
