import express from "express";
import Payment from "../models/payment.js";

const router = express.Router();

// 🟩 1) O‘quvchiga tegishli to‘lovlar
router.get("/student/:id", async (req, res) => {
  try {
    const payments = await Payment.find({ studentId: req.params.id });
    res.json(payments);
  } catch (err) {
    res.status(500).json({ message: "To‘lovlarni olishda xatolik" });
  }
});

// 🟩 2) Yangi to‘lov yaratish
router.post("/", async (req, res) => {
  try {
    const newPayment = new Payment(req.body);
    await newPayment.save();
    res.json(newPayment);
  } catch (err) {
    res.status(500).json({ message: "To‘lov qo‘shishda xatolik" });
  }
});

// 🟩 3) To‘lovni yangilash
router.patch("/:id", async (req, res) => {
  try {
    const updated = await Payment.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: "Yangilashda xatolik" });
  }
});

// 🟩 4) To‘lovni o‘chirish
router.delete("/:id", async (req, res) => {
  try {
    await Payment.findByIdAndDelete(req.params.id);
    res.json({ message: "To‘lov o‘chirildi" });
  } catch (err) {
    res.status(500).json({ message: "O‘chirishda xatolik" });
  }
});

export default router;
