const { DataTypes } = require("sequelize");

const seq = require("../db/seq");
const Goods = require("./goods.model");

// 创建模型
const Cart = seq.define("koa_cart", {
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    comment: "用户id",
  },
  goods_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    comment: "商品id",
  },
  number: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 1,
    comment: "数量",
  },
  selected: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
    comment: "是否被选中",
  },
});

// 设置关联关系
Cart.belongsTo(Goods, {
  foreignKey: "goods_id",
  as: "goods_info",
});

// 强制同步数据库（创建数据表）
// Cart.sync({ force: true });

module.exports = Cart;
