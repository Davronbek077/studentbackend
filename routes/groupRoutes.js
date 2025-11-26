import express from "express";
import { getGroups, createGroup, deleteGroup } from "../controllers/groupController.js";

const router = express.Router();

router.get("/", getGroups);
router.post("/", createGroup);

// 🔥 Yangi qo‘shildi
router.delete("/:id", deleteGroup);

export default router;
