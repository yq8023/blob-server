const { goodsParameterError } = require("../constant/err.type");

const addValidator = async (ctx, next) => {
  try {
    ctx.verifyParams({
      goods_name: { type: "string", required: true },
      goods_price: { type: "number", required: true },
      goods_num: { type: "number", required: true },
      goods_img: { type: "string", required: true },
    });
  } catch (error) {
    goodsParameterError.result = error;
    return ctx.app.emit("error", goodsParameterError, ctx);
  }
  await next();
};

const updateValidator = async (ctx, next) => {
  try {
    ctx.verifyParams({
      id: { type: "number", required: true },
    });
  } catch (error) {
    goodsParameterError.result = error;
    return ctx.app.emit("error", goodsParameterError, ctx);
  }
  await next();
};

module.exports = { addValidator, updateValidator };
