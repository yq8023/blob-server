const path = require("path");

const {
  addGoods,
  updateGoods,
  deleteGoods,
  findGoods,
} = require("../service/goods.service");
const {
  addGoodsError,
  updateGoodsError,
  deleteGoodsError,
  queryGoodsListError,
} = require("../constant/err.type");

const {
  fileUploadError,
  upSupportedFileType,
} = require("../constant/err.type");
class GoodsController {
  // 可抽离通用文件上传中间件
  async upload(ctx, next) {
    const { file } = ctx.request.files;
    const fileTypes = ["image/jpeg", "image/png"];
    if (file) {
      if (!fileTypes.includes(file.type)) {
        return ctx.app.emit("error", upSupportedFileType, ctx);
      }
      ctx.body = {
        code: 0,
        message: "图片上传成功",
        result: {
          goods_img: path.basename(file.path),
        },
      };
    } else {
      return ctx.app.emit("error", fileUploadError, ctx);
    }
  }

  async add(ctx, next) {
    try {
      const { updatedAt, createdAt, ...res } = await addGoods(ctx.request.body);
      ctx.body = {
        code: 0,
        message: "发布商品成功",
        result: res,
      };
    } catch (error) {
      return ctx.app.emit("error", addGoodsError, ctx);
    }
  }

  async update(ctx, next) {
    try {
      const { id, ...goods } = ctx.request.body;
      const res = await updateGoods(id, goods);

      if (res) {
        ctx.body = {
          code: 0,
          message: "商品信息修改成功",
          result: res,
        };
      }
    } catch (error) {
      return ctx.app.emit("error", updateGoodsError, ctx);
    }
  }

  async remove(ctx, next) {
    try {
      const { id } = ctx.request.body;
      const res = await deleteGoods(id);
      ctx.body = {
        code: 0,
        message: "删除商品成功",
        result: "",
      };
    } catch (error) {
      return ctx.app.emit("error", deleteGoodsError, ctx);
    }
  }

  async list(ctx, next) {
    try {
      // pageNum 和 pageSize
      const { pageNum = 1, pageSize = 10 } = ctx.request.query;
      const res = await findGoods(pageNum, pageSize);
      ctx.body = {
        code: 0,
        message: "获取商品列表成功",
        result: res,
      };
    } catch (error) {
      return ctx.app.emit("error", queryGoodsListError, ctx);
    }
  }
}
module.exports = new GoodsController();
