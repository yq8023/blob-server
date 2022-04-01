const { APP_PORT } = require("./config/config.default");

const app = require("./app");

app.listen(APP_PORT, () => {
  console.log("koa服务已启动");
});
