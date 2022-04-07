const { DataTypes } = require("sequelize");

const seq = require("../db/seq");

const User = seq.define("user", {
  // id 会被sequelize自动创建
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    comment: "用户名，唯一",
  },
  password: {
    type: DataTypes.CHAR(64),
    allowNull: false,
    comment: "密码",
  },
  avatar: {
    type: DataTypes.STRING,
    comment: "头像",
  },
  description: {
    type: DataTypes.STRING,
    comment: "个人信息",
  },
});

// User.sync({ force: true });

module.exports = User;
