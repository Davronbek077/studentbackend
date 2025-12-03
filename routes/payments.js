import express from "express";
import { updatePayment } from "../controllers/paymentController.js";
import Payment from "../models/Payment.js";

const router = express.Router();

// Create payment
router.post("/", async (req, res) => {
  try {
    const payment = await Payment.create(req.body);
    res.json(payment);
  } catch (err) {
    res.status(500).json({ message: "Xatolik" });
  }
});

// GET ALL payments  ✅ YANGI!
router.get("/", async (req, res) => {
  try {
    const payments = await Payment.find();
    res.json(payments);
  } catch (err) {
    res.status(500).json({ message: "Xatolik" });
  }
});

// GET payments by student ID
router.get("/student/:id", async (req, res) => {
  try {
    const list = await Payment.find({ studentId: req.params.id });
    res.json(list);
  } catch (err) {
    res.status(500).json({ message: "Xatolik" });
  }
});

// UPDATE payment
router.patch("/:id", updatePayment);

export default router;
