import express from "express";
import { updatePayment } from "../controllers/paymentController.js";
import Payment from "../models/Payment.js";

const router = express.Router();

// Create
router.post("/", async (req, res) => {
  try {
    const payment = await Payment.create(req.body);
    res.json(payment);
  } catch (err) {
    res.status(500).json({ message: "Xatolik" });
  }
});

// GET all by student
router.get("/student/:id", async (req, res) => {
  try {
    const list = await Payment.find({ studentId: req.params.id });
    res.json(list);
  } catch (err) {
    res.status(500).json({ message: "Xatolik" });
  }
});

// UPDATE PAYMENT (MUHIM!)
router.patch("/:id", updatePayment);

export default router;
