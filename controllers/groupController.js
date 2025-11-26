import Group from "../models/Group.js";

export const getGroups = async (req, res) => {
  try {
    const groups = await Group.find();
    res.json(groups);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const createGroup = async (req, res) => {
  try {
    const group = await Group.create(req.body);
    res.status(201).json(group);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const deleteGroup = async (req, res) => {
  try {
    const { id } = req.params;

    const deleted = await Group.destroy({ where: { id } });

    if (!deleted) {
      return res.status(404).json({ message: "Group not found" });
    }

    res.json({ message: "Group deleted successfully" });

  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};
