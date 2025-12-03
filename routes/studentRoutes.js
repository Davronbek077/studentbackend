import express from "express";
import Group from "../models/Group.js";
import Student from "../models/Student.js";

import {
  addStudent,
  getStudentsByGroup,
  getStudent,
  getAllStudents,
  updatePaymentStatus,
  deleteStudent,
  updateStudent
} from "../controllers/studentController.js";

const router = express.Router();

router.delete("/cleanup/not-in-group", async (req, res) => {
  try {
    const groups = await Group.find().select("_id");
    const groupIds = groups.map(g => g._id.toString());

    // Guruhlar ro'yxatida yo'q bo'lgan groupId larni o'chirish
    const result = await Student.deleteMany({
      group_id: { $nin: groupIds }
    });

    res.json({ message: "Tozalandi", deleted: result.deletedCount });
  } catch (err) {
    res.status(500).json({ message: "Xatolik" });
  }
});


router.get("/", getAllStudents);
router.post("/", addStudent);
router.get("/group/:id", getStudentsByGroup);
router.get("/:id", getStudent);
router.patch("/payment/:id", updatePaymentStatus);
router.patch("/:id", updateStudent);
router.delete("/:id", deleteStudent);

export default router; 
