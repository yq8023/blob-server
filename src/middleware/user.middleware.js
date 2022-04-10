const bcryptjs = require("bcryptjs");
const { getUserInfo } = require("../service/user.service");
const {
  userFormatError,
  userAlreadyExist,
  userRegisterError,
  loginError,
} = require("../constant/err.type");

// 用户信息校验
const userValidator = async (ctx, next) => {
  const { username, password } = ctx.request.body;

  if (!username || !password) {
    // 错误日志
    console.error(userFormatError.message);
    ctx.app.emit("error", userFormatError, ctx);
    return;
  }

  await next();
};

const verifyUser = async (ctx, next) => {
  const { username } = ctx.request.body;

  try {
    const user = await getUserInfo({ username });
    if (user) {
      ctx.app.emit("error", userAlreadyExist, ctx);
      return;
    }
  } catch (error) {
    console.log(error);
    ctx.app.emit("error", userRegisterError, ctx);
    return;
  }

  await next();
};

const cryptPassword = async (ctx, next) => {
  const { password } = ctx.request.body;
  if (password) {
    const salt = bcryptjs.genSaltSync(10);
    const hash = bcryptjs.hashSync(password, salt);
    ctx.request.body.password = hash;
  }
  await next();
};

const verifyLogin = async (ctx, next) => {
  const { username, password } = ctx.request.body;
  try {
    const res = await getUserInfo({ username });
    // 查询用户
    if (!res) {
      ctx.app.emit("error", loginError, ctx);
      return;
    }

    //验证密码
    if (!bcryptjs.compareSync(password, res.password)) {
      ctx.app.emit("error", loginError, ctx);
      return;
    }
  } catch (error) {
    ctx.app.emit("error", loginError, ctx);
  }
  await next();
};

module.exports = {
  userValidator,
  verifyUser,
  cryptPassword,
  verifyLogin,
};
