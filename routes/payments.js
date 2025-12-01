import express from "express";
import Payment from "../models/Payment.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const payment = new Payment(req.body);
    await payment.save();
    res.status(201).json(payment);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "To‘lovni saqlashda xatolik!" });
  }
});

router.get("/student/:id", async (req, res) => {
  try {
    const payments = await Payment.find({ studentId: req.params.id });
    res.json(payments);
  } catch (err) {
    res.status(500).json({ message: "To‘lovlarni yuklashda xatolik!" });
  }
});

export default router;
