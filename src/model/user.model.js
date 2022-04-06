const { DataTypes } = require("sequelize");

const seq = require("../db/seq");

const User = seq.define("blob_user", {
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
});

// User.sync({ force: true });

module.exports = User;
