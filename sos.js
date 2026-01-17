import mongoose from "mongoose";

const sosSchema = new mongoose.Schema(
  {
    name: String,
    phone: { type: String, required: true },
    emergencyType: { type: String, required: true },
    lat: Number,
    lng: Number,
  },
  { timestamps: true }
);

export default mongoose.model("Sos", sosSchema);
