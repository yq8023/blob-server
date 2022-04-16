const Router = require("koa-router");

const { auth } = require("../middleware/auth.middleware");

const {
  addArticle,
  list,
  deleteArticle,
} = require("../controller/article.controller");
const { ImgUpload } = require("../middleware/common/upload.middleware");

const articleRouter = new Router({ prefix: "/article" });

articleRouter.get("/list", auth, list);

articleRouter.post("/add", auth, addArticle);
articleRouter.post("/img_upload", auth, ImgUpload);
articleRouter.post("/delete", auth, deleteArticle);

module.exports = articleRouter;
