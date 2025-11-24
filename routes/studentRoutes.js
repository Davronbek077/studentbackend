import express from "express";
import {
  addStudent,
  getStudentsByGroup,
  getStudent,
  getAllStudents
} from "../controllers/studentController.js";

const router = express.Router();

// HAMMA TALABALAR
router.get("/", getAllStudents);

// YANGI TALABA
router.post("/", addStudent);

// GURUHDAGI TALABALAR
router.get("/group/:id", getStudentsByGroup);

// BITTA TALABA
router.get("/:id", getStudent);

export default router;
