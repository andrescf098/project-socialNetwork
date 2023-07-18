const model = require("./model");
const boom = require("@hapi/boom");
const bcrypt = require("bcrypt");

class UseService {
  async find() {
    const users = await model.find();
    const usersData = [];
    for (let i = 0; i < users.length; i++) {
      const user = {
        _id: users[i]._id,
        name: users[i].name,
        lastname: users[i].lastname,
        nick: users[i].nick,
        email: users[i].email,
        role: users[i].role,
        createAt: users[i].createAt,
      };
      usersData.push(user);
    }
    return usersData;
  }
  async create(data) {
    const hash = await bcrypt.hash(data.password, 10);
    const newUser = await model({
      ...data,
      password: hash,
    });
    await newUser.save();
    return {
      name: newUser.name,
      lastname: newUser.lastname,
      nick: newUser.nick,
      email: newUser.email,
      role: newUser.role,
      createAt: newUser.createAt,
    };
  }
}

module.exports = UseService;
