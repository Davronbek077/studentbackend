import Student from "../models/Student.js";

// 1) O‘quvchi qo‘shish
export const addStudent = async (req, res) => {
  try {
    const student = await Student.create(req.body);
    res.json(student);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// 2) Guruh bo‘yicha o‘quvchilar
export const getStudentsByGroup = async (req, res) => {
  try {
    const students = await Student.find({ group_id: req.params.id });
    res.json(students);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// 3) O‘quvchi profili
export const getStudent = async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);
    res.json(student);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getAllStudents = async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
