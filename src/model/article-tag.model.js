const { DataTypes } = require("sequelize");
const Article = require("./article.model");
const Tag = require("./tag.model");
const seq = require("../db/seq");

const ArticleTag = seq.define("article_tag", {
  article_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  tag_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

ArticleTag.associate = function () {
  Tag.belongsToMany(Article, { through: ArticleTag, foreignKey: "tag_id" });
  Article.belongsToMany(Tag, { through: ArticleTag, foreignKey: "article_id" });
};

// ArticleTag.sync({ force: true });

module.exports = ArticleTag;
