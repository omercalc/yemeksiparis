const express = require("express");
const router = express.Router();

// diğer rota içe aktarma
const categoryRoute = require("./categories.js");
const registerRoute = require("./register.js");
const loginRoute = require("./login.js");
const productRoute = require("./products.js");
const couponRoute = require("./coupons.js");

// her rotayı ilgili yol altında kullanma
router.use("/categories", categoryRoute);
router.use("/register", registerRoute);
router.use("/login", loginRoute);
router.use("/products", productRoute);
router.use("/coupons", couponRoute);

module.exports = router;