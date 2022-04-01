const Router = require("koa-router");

const {
  upload,
  add,
  update,
  remove,
  list,
} = require("../controller/goods.controller");
const { auth, hasAdminPermission } = require("../middleware/auth.middleware");
const {
  addValidator,
  updateValidator,
} = require("../middleware/goods.middleware");

const goodsRouter = new Router({ prefix: "/goods" });

goodsRouter.post("/upload", auth, hasAdminPermission, upload);

goodsRouter.get("/list", auth, list);
goodsRouter.post("/add", auth, hasAdminPermission, addValidator, add);
goodsRouter.post("/update", auth, hasAdminPermission, updateValidator, update);
goodsRouter.post("/delete", auth, hasAdminPermission, updateValidator, remove);

module.exports = goodsRouter;
