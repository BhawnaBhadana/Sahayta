const admin = require("../config/firebase");


async function verifyToken(req, res, next) {
  try {
    const header = req.headers.authorization;

    if (!header) {
      return res.status(401).json({ error: "Missing token" });
    }

    const token = header.split(" ")[1];
    const decoded = await admin.auth().verifyIdToken(token);

    req.user = {
      uid: decoded.uid,
      email: decoded.email,
    };

    next();
  } catch (err) {
    console.error("Auth Failed:", err);
    res.status(401).json({ error: "Invalid token" });
  }
}

module.exports = verifyToken;
