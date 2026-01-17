const admin = require("firebase-admin");
const path = require("path");

const serviceAccount = require(path.join(__dirname, "sahayta-16f17-firebase-adminsdk-fbsvc-e90dee5dbf.json"));

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

module.exports = admin;
