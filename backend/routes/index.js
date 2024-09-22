const express   = require("express");
const router    = express.Router();


// diğer rota içe aktarma
const categoryRoute = require("./categories.js");
const authRoute = require("./auth.js");
const productRoute = require("./products.js");
const couponRoute = require("./coupons.js");

// her rotayı ilgili yol altında kullanma

router.use("/categories", categoryRoute);
router.use("/auth", authRoute);
router.use("/products", productRoute);
router.use("/coupons", couponRoute);


module.exports = router;