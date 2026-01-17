import express from "express";
const router = express.Router();

/* GET */
router.get("/", (req, res) => {
  res.json({ success: true, message: "Location API working" });
});

/* POST */
router.post("/", (req, res) => {
  const { lat, lng } = req.body;

  if (lat === undefined || lng === undefined)
    return res.status(400).json({ success: false, message: "lat & lng required" });

  res.json({ success: true, location: { lat, lng } });
});

export default router;
