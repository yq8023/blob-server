const { tagNameIsRequired, idIsRequired } = require("../constant/err.type");

const paramsValidator = async (ctx, next) => {
  try {
    ctx.verifyParams({
      tag_name: { type: "string", required: true },
    });
  } catch (error) {
    tagNameIsRequired.result = error;
    return ctx.app.emit("error", tagNameIsRequired, ctx);
  }
  await next();
};

const idValidator = async (ctx, next) => {
  try {
    ctx.verifyParams({
      id: { type: "number", required: true },
    });
  } catch (error) {
    tagNameIsRequired.result = error;
    return ctx.app.emit("error", tagNameIsRequired, ctx);
  }
  await next();
};

module.exports = { paramsValidator, idValidator };
