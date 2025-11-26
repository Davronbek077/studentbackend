import Student from "../models/Student.js";

// 1) O‘quvchi qo‘shish
export const addStudent = async (req, res) => {
  try {
    const student = new Student({
      name: req.body.name,
      phone: req.body.phone,
      group_id: req.body.group_id,

      fatherName: req.body.fatherName,
      fatherPhone: req.body.fatherPhone,
      motherName: req.body.motherName,
      motherPhone: req.body.motherPhone,

      paymentStatus: req.body.paymentStatus,
      notes: req.body.notes
    });

    await student.save();
    res.json({ message: "Student qo‘shildi", student });
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

export const updatePaymentStatus = async (req, res) => {
  try {
    const { paymentStatus, notes } = req.body;

    const updatedStudent = await Student.findByIdAndUpdate(
      req.params.id,
      { paymentStatus, notes },
      { new: true }
    );

    if (!updatedStudent) {
      return res.status(404).json({ message: "O'quvchi topilmadi" });
    }

    res.json(updatedStudent);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
