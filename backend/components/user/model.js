const { Schema, model } = require("mongoose");

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  nick: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  recoveryToken: {
    type: String,
  },
  role: {
    type: String,
    default: "user",
  },
  image: {
    type: String,
    default: "userImage.png",
  },
  createAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = model("User", UserSchema);
