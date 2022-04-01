const { addCartError } = require("../constant/err.type");
const { createOrUpdate, findCarts } = require("../service/cart.service");

class CartController {
  async addCart(ctx, next) {
    try {
      const user_id = ctx.state.user.id;
      const goods_id = ctx.request.body.goods_id;

      const res = await createOrUpdate(user_id, goods_id);
      ctx.body = {
        code: 0,
        message: "添加购物车成功",
        result: res,
      };
    } catch (error) {
      ctx.app.emit("error", addCartError, ctx);
    }
  }

  async list(ctx, next) {
    const { pageNum = 1, pageSize = 10 } = ctx.request.query;
    const res = await findCarts(pageNum, pageSize);
    ctx.body = {
      code: 0,
      message: "获取购物车列表成功",
      result: res,
    };
  }
}

module.exports = new CartController();
