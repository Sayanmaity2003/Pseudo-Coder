import mongoose from "mongoose";

const doctorRequestSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  speciality: { type: String, required: true },
  date: { type: Date, default: Date.now },
});

export default mongoose.model("DoctorRequest", doctorRequestSchema);
