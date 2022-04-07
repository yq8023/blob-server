const {
  addTag,
  updateTag,
  deleteTag,
  findTags,
} = require("../service/tag.service");

const {
  addTagError,
  updateTagError,
  deleteTagError,
  queryTagListError,
} = require("../constant/err.type");

class TagController {
  async add(ctx, next) {
    try {
      const { updatedAt, createdAt, ...res } = await addTag(ctx.request.body);
      ctx.body = {
        code: 0,
        message: "添加标签成功",
        result: res,
      };
    } catch (error) {
      return ctx.app.emit("error", addTagError, ctx);
    }
  }

  async update(ctx, next) {
    try {
      const { id, ...goods } = ctx.request.body;
      const res = await updateTag(id, goods);

      if (res) {
        ctx.body = {
          code: 0,
          message: "标签信息修改成功",
          result: res,
        };
      }
    } catch (error) {
      return ctx.app.emit("error", updateTagError, ctx);
    }
  }

  async remove(ctx, next) {
    try {
      const { id } = ctx.request.body;
      const res = await deleteTag(id);
      ctx.body = {
        code: 0,
        message: "删除标签成功",
        result: "",
      };
    } catch (error) {
      return ctx.app.emit("error", deleteTagError, ctx);
    }
  }

  async list(ctx, next) {
    try {
      // pageNum 和 pageSize
      const { pageNum = 1, pageSize = 10 } = ctx.request.query;
      const res = await findTags(pageNum, pageSize);
      ctx.body = {
        code: 0,
        message: "获取标签列表成功",
        result: res,
      };
    } catch (error) {
      return ctx.app.emit("error", queryTagListError, ctx);
    }
  }
}
module.exports = new TagController();
