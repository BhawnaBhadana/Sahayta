const SOS = require("../models/sos");

// Create advanced SOS
exports.createSOS = async (req, res) => {
  try {
    const {
      description,
      latitude,
      longitude,
      address,
      contacts,
      timestamp
    } = req.body;

    const audio = req.files?.audio?.[0] || null;
    const image = req.files?.image?.[0] || null;

    const newSOS = new SOS({
      description,
      latitude,
      longitude,
      address,
      contacts: contacts ? JSON.parse(contacts) : [],
      audioUrl: audio ? audio.path : null,
      imageUrl: image ? image.path : null,
      timestamp
    });

    await newSOS.save();

    res.status(201).json({
      message: "SOS created successfully",
      sos: newSOS
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get all advanced SOS
exports.getSOS = async (req, res) => {
  try {
    const allSOS = await SOS.find().sort({ createdAt: -1 });
    res.status(200).json(allSOS);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
