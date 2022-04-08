const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config/config.default");
const {
  tokenExpiredError,
  jsonWebTokenError,
} = require("../constant/err.type");

const { getUserInfo } = require("../service/user.service");

const auth = async (ctx, next) => {
  const { authorization = "" } = ctx.request.header;
  const token = authorization.replace("Bearer ", "");

  try {
    const decode = jwt.verify(token, JWT_SECRET);
    const user = await getUserInfo({ id: decode.id });

    ctx.state.user = user;
  } catch (error) {
    switch (error.name) {
      case "TokenExpiredError":
        ctx.app.emit("error", tokenExpiredError, ctx);
        break;
      case "JsonWebTokenError":
        ctx.app.emit("error", jsonWebTokenError, ctx);
      default:
        ctx.app.emit("error", jsonWebTokenError, ctx);
        break;
    }
    return;
  }

  await next();
};

module.exports = { auth };
