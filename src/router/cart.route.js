const Router = require("koa-router");

const { auth } = require("../middleware/auth.middleware");
const { addValidator } = require("../middleware/cart.middleware");

const { addCart, list } = require("../controller/cart.controller");

const cartRouter = new Router({ prefix: "/cart" });

cartRouter.get("/list", auth, list);

cartRouter.post("/add", auth, addValidator, addCart);

module.exports = cartRouter;
