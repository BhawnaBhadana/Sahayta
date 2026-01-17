import mongoose from "mongoose";

const resourceSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
    contact: String,
  },
  { timestamps: true }
);

export default mongoose.model("Resource", resourceSchema);
