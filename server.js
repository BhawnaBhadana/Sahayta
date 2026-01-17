import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

// Route imports
import authRoutes from "./routes/authroutes.js";
import sosRoutes from "./routes/sosroutes.js";
import locationRoutes from "./routes/locationroutes.js";
import resourceRoutes from "./routes/resourceroutes.js";

dotenv.config();

const app = express();

/* =======================
   MIDDLEWARE
======================= */
app.use(cors());
app.use(express.json());

// Request logger (VERY IMPORTANT for debugging)
app.use((req, res, next) => {
  console.log(`➡️ ${req.method} ${req.url}`);
  next();
});

/* =======================
   BASIC ROUTES
======================= */

// Root
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "🚀 Sahayta Backend is Running"
  });
});

// DB / Health Check
app.get("/db-check", (req, res) => {
  res.status(200).json({
    success: true,
    message: "✅ Backend & MongoDB route reachable"
  });
});

/* =======================
   API ROUTES
======================= */

app.use("/api/auth", authRoutes);        // signup / login
app.use("/api/sos", sosRoutes);           // SOS alerts
app.use("/api/location", locationRoutes); // location tracking
app.use("/api/resources", resourceRoutes);// resources

/* =======================
   404 HANDLER (LAST ONLY)
======================= */
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found"
  });
});

/* =======================
   SERVER + DB
======================= */
const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB Connected");
    app.listen(PORT, () => {
      console.log(`✅ Server running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("❌ MongoDB Error:", error.message);
  });
