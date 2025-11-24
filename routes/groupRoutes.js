import express from "express";
import { getGroups, createGroup } from "../controllers/groupController.js";

const router = express.Router();

// Barcha guruhlar
router.get("/", getGroups);

// Yangi guruh qo‘shish
router.post("/", createGroup);

export default router;
