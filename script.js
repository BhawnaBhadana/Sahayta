const BACKEND_URL = "http://localhost:5000";

/* =========================
   SEND LOCATION
========================= */
async function sendLocation(lat, lng) {
  try {
    const response = await fetch(`${BACKEND_URL}/api/location`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ lat, lng }),
    });

    const data = await response.json();
    console.log("Location response:", data);
  } catch (error) {
    console.error("Location error:", error);
  }
}

/* =========================
   SEND SOS ALERT
========================= */
async function sendSOS() {
  if (!navigator.geolocation) {
    alert("Geolocation not supported");
    return;
  }

  navigator.geolocation.getCurrentPosition(
    async (position) => {
      const lat = position.coords.latitude;
      const lng = position.coords.longitude;

      try {
        const response = await fetch(`${BACKEND_URL}/api/sos`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            message: "Emergency SOS triggered",
            lat,
            lng,
            time: new Date(),
          }),
        });

        const data = await response.json();
        console.log("SOS response:", data);

        alert("SOS sent successfully!");

        // also send location separately
        sendLocation(lat, lng);
      } catch (error) {
        console.error("SOS error:", error);
      }
    },
    (error) => {
      console.error("Geolocation error:", error);
    }
  );
}

/* =========================
   BUTTON CONNECTION
========================= */
document.addEventListener("DOMContentLoaded", () => {
  const sosBtn = document.getElementById("sosBtn");

  if (sosBtn) {
    sosBtn.addEventListener("click", sendSOS);
  }
});
