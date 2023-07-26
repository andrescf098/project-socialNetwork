const jwt = require("jsonwebtoken");
const FollowService = require("./service");
const service = new FollowService();

class FollowController {
  async save(req, res, next) {
    const { idFollowed } = req.body;
    const token = req.headers.authorization.split(" ")[1];
    const userId = jwt.decode(token).sub;
    try {
      res.status(200).json(await service.save(userId, idFollowed));
    } catch (error) {
      next(error);
    }
  }
  async unfollow(req, res, next) {
    const idFollowed = req.params.id;
    const token = req.headers.authorization.split(" ")[1];
    const userId = jwt.decode(token).sub;
    try {
      res.status(200).json(await service.unfollow(userId, idFollowed));
    } catch (error) {
      next(error);
    }
  }
  async following(req, res, next) {
    const token = req.headers.authorization.split(" ")[1];
    const userId = jwt.decode(token).sub;
    try {
      res
        .status(200)
        .json(await service.following(userId, req.query.page, req.query.limit));
    } catch (error) {
      next(error);
    }
  }
  async followers(req, res, next) {
    const token = req.headers.authorization.split(" ")[1];
    const userId = jwt.decode(token).sub;
    try {
      res
        .status(200)
        .json(await service.followers(userId, req.query.page, req.query.limit));
    } catch (error) {
      next(error);
    }
  }
}

module.exports = FollowController;
