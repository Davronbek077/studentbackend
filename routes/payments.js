import express from "express";
import { updatePayment } from "../controllers/paymentController.js";
import Payment from "../models/Payment.js";
import Student from "../models/Student.js";

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
    const payments = await Payment.find().populate("studentId", "name").populate("groupId", "name");
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

router.delete("/cleanup/not-in-students", async (req, res) => {
  try {
    const students = await Student.find().select("_id");
    const studentIds = students.map(s => s._id.toString());

    const result = await Payment.deleteMany({
      studentId: { $nin: studentIds }
    });

    res.json({
      message: "O‘chirilgan o‘quvchilarga tegishli to‘lovlar tozalandi",
      deleted: result.deletedCount
    });

  } catch (err) {
    res.status(500).json({ message: "Xatolik", err });
  }
});

router.delete("/:id", async (req, res) => {
  try{
    await Payment.findByIdAndDelete(req.params.id);
    res.json({message: "To'lov muvaffaqiyatli o'chirildi"});
  } catch (err) {
    res.status(500).json({message: "Xatolik", err});
  }
});

// UPDATE payment
router.patch("/:id", updatePayment);

export default router;
