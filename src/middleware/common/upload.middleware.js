const path = require("path");
const {
  fileUploadError,
  upSupportedFileType,
} = require("../../constant/err.type");

const ImgUpload = async (ctx, next) => {
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
        path: path.basename(file.path),
      },
    };
  } else {
    return ctx.app.emit("error", fileUploadError, ctx);
  }
};

module.exports = {
  ImgUpload,
};
