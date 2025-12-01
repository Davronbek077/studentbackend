import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import studentRoutes from "./routes/studentRoutes.js";
import groupRoutes from "./routes/groupRoutes.js";
import paymentsRoute from "./routes/payments.js"

const app = express();
app.use(express.json());
app.use(cors());

// MongoDB Atlas ulanish
mongoose
  .connect("mongodb+srv://rahmonovdavronbek770:EdHUZI8qdVbjvHWv@cluster0.dys3j.mongodb.net/center?retryWrites=true&w=majority&appName=Cluster0")
  .then(() => console.log("MongoDB Atlasga ulandi"))
  .catch(err => console.log("MongoDB xatosi:", err));

app.use("/students", studentRoutes);
app.use("/groups", groupRoutes);
app.use("/payments", paymentsRoute);

app.listen(5000, () => console.log("Server 5000-portda ishlayapti"));
