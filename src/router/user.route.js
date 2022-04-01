const Router = require("koa-router");

const {
  userValidator,
  verifyUser,
  cryptPassword,
  verifyLogin,
} = require("../middleware/user.middleware");

const { auth } = require("../middleware/auth.middleware");

const {
  register,
  login,
  query,
  update,
} = require("../controller/user.controller");

const userRouter = new Router({ prefix: "/user" });

// 注册接口
userRouter.post(
  "/register",
  userValidator,
  verifyUser,
  cryptPassword,
  register
);

userRouter.post("/login", verifyLogin, login);

userRouter.post("/update", auth, cryptPassword, update);

userRouter.get("/query", query);

module.exports = userRouter;
