import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/user.js";
import errorHandler from "./middleware/errorhandler.js";

dotenv.config();
const app = express();

// connect DB
connectDB();

// middleware
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Sahayta Backend API Running 🚀");
});

// API routes
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);

// global error handler
app.use(errorHandler);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server running at http://127.0.0.1:${PORT}`);
});
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/user.js";
import errorHandler from "./middleware/errorhandler.js";

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);

// must be last
app.use(errorHandler);
