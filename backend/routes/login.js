const express = require("express");
const router = express.Router();
const User = require("../models/User.js");
const bcrypt = require("bcryptjs");

// kullanıcı giriş (login)
router.post("/", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Kullanıcı kontrolü
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ error: "Geçersiz e-posta veya şifre." });
    }

    // Şifre kontrolü
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ error: "Geçersiz e-posta veya şifre." });
    }

    res.status(200).json({ message: "Giriş başarılı", user });
  } catch (err) {
    console.error("Hata:", err);
    res.status(500).json({ error: "Giriş yapılırken bir hata oluştu." });
  }
});

module.exports = router;