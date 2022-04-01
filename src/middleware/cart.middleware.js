const { cartParameterError } = require("../constant/err.type");

const addValidator = async (ctx, next) => {
  try {
    ctx.verifyParams({
      goods_id: "number",
    });
  } catch (error) {
    cartParameterError.result = error;
    return ctx.app.emit("error", cartParameterError, ctx);
  }
  await next();
};

module.exports = {
  addValidator,
};
