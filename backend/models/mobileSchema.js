// mobileSchema.js
import mongoose from "mongoose";

// Define the schema for the "Mobile" model
const mobileSchema = new mongoose.Schema({
  brand:{ type: String, required: true, trim: "true" },
  model: { type: String, required: true, trim: "true" },
  price: { type: Number, required: true },
  color: { type: String, required: true, trim: "true" },
  image: { type: String, required: true, trim: "true" },
  type: { type: String, required: true, trim: "true" },
  processor: { type: String, required: true, trim: "true" },
  memory: { type: String, required: true, trim: "true" },
  os: { type: String, required: true, trim: "true" },
  chip: { type: String, required: true, trim: "true" },
});

// Register the "Mobile" model with the defined schema
const MobileModel = mongoose.model("Mobile", mobileSchema);

// Export the model
export default MobileModel;
