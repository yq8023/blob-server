const Tag = require("../model/tag.model");
const Article = require("../model/article.model");

class TagService {
  async addTag(tag) {
    const res = await Tag.create(tag);
    return res.dataValues;
  }
  async updateTag(id, tag) {
    const res = await Tag.update(tag, { where: { id } });
    return res[0] > 0;
  }
  async deleteTag(id) {
    const res = await Tag.destroy({ where: { id } });
    return res[0] > 0;
  }

  async findTags(pageNum, pageSize) {
    const { count, rows } = await Tag.findAndCountAll({
      offset: (pageNum - 1) * pageSize,
      limit: pageSize * 1,
      include: [
        {
          model: Article,
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
}

module.exports = new TagService();
