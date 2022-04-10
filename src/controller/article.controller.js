const { addArticleError, deleteArticleError } = require("../constant/err.type");
const {
  createOrUpdate,
  findArticles,
  deleteArticles,
} = require("../service/article.service");

class ArticleController {
  async addArticle(ctx, next) {
    try {
      const article = ctx.request.body;

      const msg = await createOrUpdate(article);
      ctx.body = {
        code: 0,
        message: msg,
        result: "",
      };
    } catch (error) {
      ctx.app.emit("error", addArticleError, ctx);
    }
  }

  async list(ctx, next) {
    const { pageNum = 1, pageSize = 10 } = ctx.request.query;
    const res = await findArticles(pageNum, pageSize);
    ctx.body = {
      code: 0,
      message: "获取文章列表成功",
      result: res,
    };
  }

  async deleteArticle(ctx, next) {
    try {
      const id = ctx.request.body.id;

      const res = await deleteArticles(id);
      ctx.body = {
        code: 0,
        message: "删除文章成功",
        result: "",
      };
    } catch (error) {
      ctx.app.emit("error", deleteArticleError, ctx);
    }
  }
}

module.exports = new ArticleController();
