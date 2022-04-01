const User = require("../model/user.model");

class UserService {
  async createUser(username, password) {
    const res = await User.create({ username, password });
    return res.dataValues;
  }
  async getUserInfo({ id, username, password, is_admin }) {
    const res = await User.findOne({
      attributes: ["id", "username", "password", "is_admin"],
      where: arguments[0],
    });
    return res;
  }
  async updateUserInfo(id, { username, password, is_admin }) {
    const res = await User.update(arguments[1], {
      where: { id },
    });
    return !!res[0];
  }
}

module.exports = new UserService();
