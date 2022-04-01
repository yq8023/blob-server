const path = require("path");

const Koa = require("koa");
const KoaBody = require("koa-body");
const KoaStatic = require("koa-static");
const KoaParameter = require("koa-parameter");

const errHandler = require("./errHandler");

// 引入路由
const router = require("../router");

const app = new Koa();

app.use(
  KoaBody({
    multipart: true,
    formidable: {
      // 这里不推荐使用相对路径，相对路径为 process.cwd()
      uploadDir: path.join(__dirname, "../upload"),
      keepExtensions: true,
    },
  })
);
app.use(KoaParameter(app));

// 将upload文件夹作为静态服务器
app.use(KoaStatic(path.join(__dirname, "../upload")));
// 注册路由
app.use(router.routes()).use(router.allowedMethods());

// 统一错误处理
app.on("error", errHandler);
module.exports = app;
