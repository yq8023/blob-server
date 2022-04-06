const Router = require("koa-router");

const {
  upload,
  add,
  update,
  remove,
  list,
} = require("../controller/tag.controller");
const { auth } = require("../middleware/auth.middleware");
const {
  paramsValidator,
  idValidator,
} = require("../middleware/tag.middleware");

const goodsRouter = new Router({ prefix: "/tag" });

goodsRouter.post("/upload", auth, upload);

goodsRouter.get("/list", auth, list);
goodsRouter.post("/add", auth, paramsValidator, add);
goodsRouter.post("/update", auth, idValidator, paramsValidator, update);
goodsRouter.post("/delete", auth, idValidator, remove);

module.exports = goodsRouter;
