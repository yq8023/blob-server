const Router = require("koa-router");

const { auth } = require("../middleware/auth.middleware");

const {
  addArticle,
  list,
  deleteArticle,
} = require("../controller/article.controller");

const articleRouter = new Router({ prefix: "/article" });

articleRouter.get("/list", auth, list);

articleRouter.post("/add", auth, addArticle);
articleRouter.post("/delete", auth, deleteArticle);

module.exports = articleRouter;
