const fs = require("fs");

// 使用router作为中间件，使其自动加载路由文件
const Router = require("koa-router");
const router = new Router();

// 读取文件，自动引入路由
fs.readdirSync(__dirname).forEach((file) => {
  if (file !== "index.js") {
    const r = require("./" + file);
    router.use(r.routes());
  }
});

module.exports = router;
