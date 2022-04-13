const { DataTypes } = require("sequelize");

const seq = require("../db/seq");

const Tag = seq.define("tag", {
  tag_name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    comment: "标签名称",
  },
  tag_color: {
    type: DataTypes.STRING,
    comment: "标签颜色",
  },
});

// Tag.sync({ force: true });

module.exports = Tag;
