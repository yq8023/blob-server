const User = require("../model/user.model");

const getPublicUserInfo = (userInfo) => {
  const { password, createdAt, updatedAt, ...otherInfo } = userInfo;
  return otherInfo;
};

class UserService {
  async createUser(username, password) {
    const res = await User.create({ username, password });
    return res.dataValues;
  }
  async getUserInfo({ id, username, password }) {
    const res = await User.findOne({
      where: arguments[0],
    });
    return getPublicUserInfo(res.dataValues);
  }
  async updateUserInfo(id, updateObj) {
    const res = await User.update(arguments[1], {
      where: { id },
    });
    return !!res[0];
  }
}

module.exports = new UserService();
