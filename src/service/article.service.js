const Article = require("../model/article.model");
const Tag = require("../model/tag.model");
const ArticleTag = require("../model/article-tag.model");

class ArticleService {
  constructor() {
    ArticleTag.associate();
  }

  async createOrUpdate(article) {
    const { id, tag_ids, ...other } = article;
    const tags = await Tag.findAll({ where: { id: tag_ids } });

    if (id) {
      const article = await Article.findByPk(id);
      await article.update({ ...other });
      await article.setTags(tags);
      return "文章更新成功";
    } else {
      const article = await Article.create({ ...other });
      await article.setTags(tags);
      return "新增文章成功";
    }
  }

  async findArticles(pageNum, pageSize) {
    const { count, rows } = await Article.findAndCountAll({
      offset: (pageNum - 1) * pageSize,
      limit: pageSize * 1,
      include: [
        {
          model: Tag,
          attributes: ["id", "tag_name", "tag_color"],
          through: { attributes: [] },
        },
      ],
    });
    return {
      pageNum,
      pageSize,
      total: count,
      list: rows,
    };
  }

  async deleteArticles(id) {
    const article = await Article.findByPk(id);
    await article.removeTags();
    await Article.destroy({ where: { id } });
  }
}

module.exports = new ArticleService();
