import express from "express";
import {
  addStudent,
  getStudentsByGroup,
  getStudent,
  getAllStudents,
  updatePaymentStatus,
  deleteStudent
} from "../controllers/studentController.js";

const router = express.Router();

router.get("/", getAllStudents);
router.post("/", addStudent);
router.get("/group/:id", getStudentsByGroup);
router.get("/:id", getStudent);
router.patch("/payment/:id", updatePaymentStatus);

// 🔥 Yangi qo‘shildi
router.delete("/:id", deleteStudent);

export default router;
