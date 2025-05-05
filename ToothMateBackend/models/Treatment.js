// models/Treatment.js---used for mocking data
const mongoose = require('mongoose');

const treatmentSchema = new mongoose.Schema({
  toothId: { type: mongoose.Schema.Types.ObjectId, required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, required: true },
  treatmentDate: { type: Date, required: true },
  treatmentType: { type: String, required: true },
  treatmentDetails: { type: String, required: true },
  doctor: { type: String, required: true },
  appointmentId: { type: mongoose.Schema.Types.ObjectId, required: true },
  status: { type: String, required: true }, // e.g., 'completed', 'pending'
});

const Treatment = mongoose.model('Treatment', treatmentSchema);

module.exports = Treatment;
