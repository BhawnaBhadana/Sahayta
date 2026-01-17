const express = require("express");
const router = express.Router();
const { getAlerts, addAlert } = require("../controllers/alertcontroller");

router.get("/", getAlerts);
router.post("/", addAlert);

module.exports = router;
