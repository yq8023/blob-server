const Router = require("koa-router");

const {
  userValidator,
  verifyUser,
  cryptPassword,
  verifyLogin,
} = require("../middleware/user.middleware");

const { auth } = require("../middleware/auth.middleware");
const { ImgUpload } = require("../middleware/common/upload.middleware");

const {
  register,
  login,
  update,
  getInfome,
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

userRouter.get("/me", auth, getInfome);

userRouter.post("/login", verifyLogin, login);

userRouter.post("/update", auth, cryptPassword, update);

userRouter.post("/upload", auth, ImgUpload);

module.exports = userRouter;
