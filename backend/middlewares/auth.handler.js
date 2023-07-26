const boom = require("@hapi/boom");
const { config } = require("../config");

const checkApiKey = (req, res, next) => {
  const apiKey = req.headers["x-api-key"];
  if (apiKey === config.apiKey) {
    next();
  } else {
    next(boom.unauthorized());
  }
};
const checkAuthorizedRoles = (...roles) => {
  return (req, res, next) => {
    const user = req.user;
    if (roles.includes(user.role)) {
      next();
    } else {
      next(boom.unauthorized());
    }
  };
};
const checkIdForUser = () => {
  return async (req, res, next) => {
    const userIdFromArticle = await userModel.findById(req.params.id);
    const user = req.user.sub;
    if (String(user) === String(userIdFromArticle._id)) {
      next();
    } else {
      next(boom.unauthorized());
    }
  };
};

module.exports = {
  checkApiKey,
  checkAuthorizedRoles,
  checkIdForUser,
};
