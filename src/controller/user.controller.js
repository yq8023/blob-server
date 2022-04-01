const jwt = require("jsonwebtoken");

const {
  createUser,
  getUserInfo,
  updateUserInfo,
} = require("../service/user.service");
const {
  userRegisterError,
  updateUserInfoError,
} = require("../constant/err.type");

const { JWT_SECRET } = require("../config/config.default");

class UserController {
  async register(ctx, next) {
    const { username, password } = ctx.request.body;
    try {
      const res = await createUser(username, password);
      ctx.body = res + " : " + username;
    } catch (error) {
      console.log(error);
      ctx.app.emit("error", userRegisterError);
    }
  }

  async login(ctx, next) {
    const { username } = ctx.request.body;

    try {
      const res = await getUserInfo({ username });

      const { password, ...userInfo } = res.dataValues;

      ctx.body = {
        code: 0,
        message: "用户登录成功",
        result: {
          token: jwt.sign(userInfo, JWT_SECRET, { expiresIn: "1d" }),
        },
      };
    } catch (error) {
      console.log(error);
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

  async query(ctx, next) {
    ctx.body = "查询用户!";
  }
}

module.exports = new UserController();
