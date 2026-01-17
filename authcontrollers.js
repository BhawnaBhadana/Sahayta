const admin = require("../config/firebase");

exports.registerUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Email and password required" });
    }

    const user = await admin.auth().createUser({
      email,
      password,
    });

    res.json({ success: true, message: "User registered", user });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

exports.loginUser = async (req, res) => {
  return res.json({
    message: "Login handled by Firebase Auth on frontend. Send ID token to backend to verify."
  });
};
