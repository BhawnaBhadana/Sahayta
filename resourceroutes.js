import express from "express";
import Resource from "../models/resource.js";

const router = express.Router();

/* GET ALL */
router.get("/", async (req, res) => {
  const resources = await Resource.find();
  res.json({ success: true, resources });
});

/* CREATE */
router.post("/", async (req, res) => {
  const resource = await Resource.create(req.body);
  res.status(201).json({ success: true, resource });
});

export default router;
