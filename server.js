import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import studentRoutes from "./routes/studentRoutes.js";
import groupRoutes from "./routes/groupRoutes.js";
import paymentsRoute from "./routes/payments.js";

const app = express();
app.use(express.json());

// 🔥 CORS doim ROUTERLARDAN OLDIN bo‘lishi kerak
app.use(cors({
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE"],
}));

// MongoDB Atlas ulanish
mongoose
  .connect("mongodb+srv://rahmonovdavronbek770:EdHUZI8qdVbjvHWv@cluster0.dys3j.mongodb.net/center?retryWrites=true&w=majority&appName=Cluster0")
  .then(() => console.log("MongoDB Atlasga ulandi"))
  .catch(err => console.log("MongoDB xatosi:", err));

app.use("/students", studentRoutes);
app.use("/groups", groupRoutes);
app.use("/payments", paymentsRoute);

// 🔥 Render uchun port
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server ${PORT}-portda ishlayapti`));
