const { DataTypes } = require("sequelize");

const seq = require("../db/seq");

const Tag = seq.define("tag", {
  tag_name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    comment: "标签名称",
  },
});

// Tag.sync({ force: true });

module.exports = Tag;
