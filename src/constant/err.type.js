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
  goodsParameterError: {
    code: 10203,
    message: "商品参数格式错误",
    result: "",
  },
  addGoodsError: {
    code: 10204,
    message: "添加商品出错",
    result: "",
  },
  updateGoodsError: {
    code: 10205,
    message: "修改商品信息出错",
    result: "",
  },
  deleteGoodsError: {
    code: 10206,
    message: "删除商品出错",
    result: "",
  },
  queryGoodsListError: {
    code: 10207,
    message: "查询商品列表出错",
    result: "",
  },

  cartParameterError: {
    code: 10301,
    message: "购物车参数出错",
    result: "",
  },
  addCartError: {
    code: 10302,
    message: "添加购物车出错",
    result: "",
  },
};
