const express = require("express");
const router = express.Router();
const User = require("../models/User.js");
const bcrypt = require("bcryptjs");

// kullanıcı oluşturma (create - register)
router.post("/register", async (req, res) => {
  try {
    const { username, email, password, confirmPassword } = req.body;

    // E-posta benzersizlik kontrolü
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res
        .status(400)
        .json({ error: "Bu e-posta adresi zaten kullanılıyor." });
    }

    // Girdi doğrulama
    if (!username || !email || !password || !confirmPassword) {
      return res.status(400).json({ error: "Tüm alanlar gereklidir." });
    }

    // Şifrelerin eşleşip eşleşmediğini kontrol etme
    if (password !== confirmPassword) {
      return res.status(400).json({ error: "Şifreler eşleşmiyor." });
    }

    // Şifre hashleme
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    res.status(201).json(newUser);
  } catch (err) {
    console.error("Hata:", err);
    res.status(500).json({ error: "Kullanıcı oluşturulurken bir hata oluştu." });
  }
});

module.exports = router;