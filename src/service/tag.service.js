const Tag = require("../model/tag.model");
const Article = require("../model/article.model");
const COLOR_ARR = [
  "#ff7300",
  "#f08080",
  "#e69966",
  "#996b1f",
  "#d2b48c",
  "#b8860b",
  "#625b57",
  "#006400",
  "#006374",
  "#87ceeb",
  "#082567",
  "#6640ff",
  "#8a2be2",
  "#ee82ee",
  "#ff69b4",
];
class TagService {
  async addTag(tag) {
    const color = COLOR_ARR[Math.floor(Math.random() * COLOR_ARR.length)];
    const res = await Tag.create({ ...tag, tag_color: color });
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
          include: [
            {
              model: Tag,
              through: { attributes: [] },
            },
          ],
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
