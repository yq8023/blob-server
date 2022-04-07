const { DataTypes } = require("sequelize");
const seq = require("../db/seq");

const Article = seq.define("article", {
  title: {
    type: DataTypes.STRING,
    comment: "文章标题",
  },
  content: {
    type: DataTypes.TEXT("long"),
    comment: "内容",
  },
  read_times: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
    comment: "阅读次数",
  },
});

// Article.sync({ force: true });

module.exports = Article;
