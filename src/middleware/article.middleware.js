const { articleParameterError } = require("../constant/err.type");

const addValidator = async (ctx, next) => {
  try {
    ctx.verifyParams({
      content: "string",
    });
  } catch (error) {
    articleParameterError.result = error;
    return ctx.app.emit("error", articleParameterError, ctx);
  }
  await next();
};

module.exports = {
  addValidator,
};
