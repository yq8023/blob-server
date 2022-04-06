const { DataTypes } = require("sequelize");
const seq = require("../db/seq");

const Article = seq.define("article", {
  content: {
    type: DataTypes.TEXT("long"),
    comment: "内容",
  },
  author_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    comment: "作者Id",
  },
  read_times: {
    type: DataTypes.INTEGER,
    defaultValue: 1,
    comment: "阅读次数",
  },
});

// Article.sync({ force: true });

module.exports = Article;
