module.exports = {
  userFormatError: {
    code: 10001,
    message: "用户名或密码为空",
    result: "",
  },
  userAlreadyExist: {
    code: 10002,
    message: "用户已存在",
    result: "",
  },
  userRegisterError: {
    code: 10003,
    message: "用户注册错误",
    result: "",
  },

  loginError: {
    code: 10004,
    message: "账号或者密码错误",
    result: "",
  },
  updateUserInfoError: {
    code: 10005,
    message: "更新用户信息失败",
    result: "",
  },
  tokenExpiredError: {
    code: 10101,
    message: "token已过期",
    result: "",
  },
  jsonWebTokenError: {
    code: 10102,
    message: "无效的token",
    result: "",
  },
  notHaveAdminPermission: {
    code: 10103,
    message: "没有管理员权限",
    result: "",
  },

  fileUploadError: {
    code: 10201,
    message: "文件上传出错",
    result: "",
  },
  upSupportedFileType: {
    code: 10202,
    message: "不支持的文件格式",
    result: "",
  },

  tagNameIsRequired: {
    code: 10203,
    message: "标签名不能为空",
    result: "",
  },
  addTagError: {
    code: 10204,
    message: "添加标签出错",
    result: "",
  },
  updateTagError: {
    code: 10205,
    message: "修改标签信息出错",
    result: "",
  },
  deleteTagError: {
    code: 10206,
    message: "删除标签出错",
    result: "",
  },
  queryTagListError: {
    code: 10207,
    message: "查询标签列表出错",
    result: "",
  },
  idIsRequired: {
    code: 10208,
    message: "id不能为空",
    result: "",
  },
  articleParameterError: {
    code: 10301,
    message: "文章参数出错",
    result: "",
  },
  addArticleError: {
    code: 10302,
    message: "新增文章出错",
    result: "",
  },
  deleteArticleError: {
    code: 10303,
    message: "删除文章出错",
    result: "",
  },
};
