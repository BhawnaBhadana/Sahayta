import express from "express";
import Sos from "../models/sos.js";

const router = express.Router();

/* GET ALL SOS */
router.get("/", async (req, res) => {
  const sos = await Sos.find().sort({ createdAt: -1 });
  res.json({ success: true, sos });
});

/* CREATE SOS */
router.post("/", async (req, res) => {
  try {
    const { phone, emergencyType, lat, lng, name } = req.body;

    if (!phone || !emergencyType)
      return res.status(400).json({ success: false, message: "Phone & emergency required" });

    const sos = await Sos.create({ name, phone, emergencyType, lat, lng });

    res.status(201).json({ success: true, sos });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

export default router;
