const seq = require("../db/seq");

const Article = require("./article.model");
const Tag = require("./tag.model");
const User = require("./user.model");
const ArticleTag = require("./article-tag.model");

// 删除数据库所有表
const dropAllTable = async (callback) => {
  await seq.drop();
  callback();
};

// 创建所有表
const createAllTable = async () => {
  await User.sync({ force: true });
  await Tag.sync({ force: true });
  await Article.sync({ force: true });
  await ArticleTag.sync({ force: true });
};

dropAllTable(() => {
  createAllTable();
});
