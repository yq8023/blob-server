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
  motto: {
    type: DataTypes.STRING,
    comment: "座右铭",
  },
  blob_title: {
    type: DataTypes.STRING,
    comment: "博客标题",
  },
  blob_avatar: {
    type: DataTypes.STRING,
    comment: "博客头像",
  },
  blob_description: {
    type: DataTypes.STRING,
    comment: "博客描述信息",
  },
});

// User.sync({ force: true });

module.exports = User;
