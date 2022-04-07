const jwt = require("jsonwebtoken");

const {
  createUser,
  getUserInfo,
  updateUserInfo,
} = require("../service/user.service");
const {
  userRegisterError,
  updateUserInfoError,
  loginError,
} = require("../constant/err.type");

const { JWT_SECRET } = require("../config/config.default");

class UserController {
  async register(ctx, next) {
    const { username, password } = ctx.request.body;
    try {
      const res = await createUser(username, password);
      ctx.body = res + " : " + username;
    } catch (error) {
      ctx.app.emit("error", userRegisterError, ctx);
    }
  }

  async login(ctx, next) {
    const { username } = ctx.request.body;

    try {
      const res = await getUserInfo({ username });

      const { password, ...userInfo } = res.dataValues;
      const token = jwt.sign(userInfo, JWT_SECRET, { expiresIn: "1d" });
      ctx.cookies.set("token", token, {
        httpOnly: false,
      });

      ctx.body = {
        code: 0,
        message: "用户登录成功",
        result: "",
      };
    } catch (error) {
      ctx.app.emit("error", loginError, ctx);
    }
  }

  async update(ctx, next) {
    const id = ctx.state.user.id;
    const updateObj = ctx.request.body;
    const res = await updateUserInfo(id, updateObj);

    if (res) {
      ctx.body = {
        code: 0,
        message: "更新用户信息成功",
        result: "",
      };
    } else {
      ctx.app.emit("error", updateUserInfoError, ctx);
    }
  }

  async getInfome(ctx, next) {
    const user = ctx.state.user;
    ctx.body = {
      code: 0,
      message: "查询用户信息成功",
      result: user,
    };
  }
}

module.exports = new UserController();
