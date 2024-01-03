import mongoose from "mongoose";

const mobileSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  brand: { type: String, required: true, trim: true },
  model: { type: String, required: true, trim: true },
  price: { type: Number, required: true },
  color: { type: String, required: true, trim: true },
  image: { type: String, required: true, trim: true },
  type: { type: String, required: true, trim: true },
  processor: { type: String, required: true, trim: true },
  memory: { type: String, required: true, trim: true },
  os: { type: String, required: true, trim: true },
  chip: { type: String, required: true, trim: true },
});

const MobileModel = mongoose.model("Mobile", mobileSchema);

export default MobileModel;
