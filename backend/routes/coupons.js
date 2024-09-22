const express = require("express");
const router = express.Router();
const Coupon = require("../models/Coupon.js");

// Yeni bir kupon oluşturma (Create)
router.post("/", async (req, res) => {
  try {
    const { code } = req.body;

    const existingCoupon = await Coupon.findOne({ code });
    if (existingCoupon) {
      return res.status(400).json({ error: "Coupon already exists." });
    }

    const newCoupon = new Coupon(req.body);
    await newCoupon.save();

    res.status(201).json(newCoupon);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server error." });
  }
});

// Tüm kuponları getirme (read-all)
router.get("/", async (req, res) => {
  try {
    const coupons = await Coupon.find();

    res.status(200).json(coupons);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server error" });
  }
});

// Belirli bir kategoriyi getirme (read-single kupon id ile getirme)
router.get("/:couponsId", async (req, res) => {
  try {
    const couponsId = req.params.couponsId;

    const coupon = await Coupon.findById(couponsId);

    res.status(200).json(coupon);
    if (!coupon) {
      return res.status(404).json({ error: "coupons not found" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server error" });
  }
});

// Belirli bir kategoriyi getirme (read-single kupon codu ile getirme)
router.get("/code/:couponCode", async (req, res) => {
  try {
    const couponCode = req.params.couponCode;

    const coupon = await Coupon.findOne({ code: couponCode });

    res.status(200).json(coupon);
    if (!coupon) {
      return res.status(404).json({ error: "coupons not found" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server error" });
  }
});

// Cupon güncelleme (update)
router.put("/:couponId", async (req, res) => {
  try {
    const couponId = req.params.couponId;
    const updates = req.body;

    const existingCoupon = await Coupon.findById(couponId);

    if (!existingCoupon) {
      return res.status(404).json({ error: "Coupon not found." });
    }

    const updatedCoupon = await Coupon.findByIdAndUpdate(couponId, updates, {
      new: true,
    });

    res.status(200).json(updatedCoupon);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server error." });
  }
});

// Coupon silme (delete)
router.delete("/:couponId", async (req, res) => {
  try {
    const couponId = req.params.couponId;

    const deletedCoupon = await Coupon.findByIdAndDelete(couponId);

    if (!deletedCoupon) {
      return res.status(404).json({ error: "Coupon not found." });
    }

    res.status(200).json(deletedCoupon);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server error." });
  }
});

module.exports = router;
