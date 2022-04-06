const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config/config.default");
const {
  tokenExpiredError,
  jsonWebTokenError,
} = require("../constant/err.type");

const auth = async (ctx, next) => {
  const { authorization = "" } = ctx.request.header;
  const token = authorization.replace("Bearer ", "");

  try {
    const decode = jwt.verify(token, JWT_SECRET);
    ctx.state.user = decode;
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
