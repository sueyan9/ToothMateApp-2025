// seedData.js
require('dotenv').config();
const mongoose = require('mongoose');

const mongoUri = process.env.MONGO_URI;

// Define Treatment schema
const treatmentSchema = new mongoose.Schema({
  toothId: mongoose.Schema.Types.ObjectId,
  userId: mongoose.Schema.Types.ObjectId,
  appointmentId: { type: mongoose.Schema.Types.ObjectId, required: false },
  doctor: String,
  treatmentDate: Date,
  treatmentType: String,
  treatmentDetails: String,
  status: String,
});

const Treatment = mongoose.model('Treatment', treatmentSchema);

// Mock data
const mockTreatments = [
  {
    toothId: mongoose.Types.ObjectId('6818858820a43c0c0c201fd4'),
    userId: mongoose.Types.ObjectId('67fa24fe4cd4c21399d96982'),
    appointmentId: null,
    doctor: 'Dr. Smith',
    treatmentDate: new Date('2024-04-10'),
    treatmentType: 'Filling',
    treatmentDetails: 'Composite filling for small cavity on distal surface.',
    status: 'Completed',
  },
  {
    toothId: mongoose.Types.ObjectId('6818858820a43c0c0c201fd4'),
    userId: mongoose.Types.ObjectId('67fa24fe4cd4c21399d96982'),
    appointmentId:null,
    doctor: 'Dr. Taylor',
    treatmentDate: new Date('2024-03-05'),
    treatmentType: 'Crown',
    treatmentDetails: 'Porcelain crown placed due to extensive decay.',
    status: 'Completed',
  },
  {
    toothId: mongoose.Types.ObjectId('6818858820a43c0c0c201fd4'),
    userId: mongoose.Types.ObjectId('67fa24fe4cd4c21399d96982'),
    appointmentId: mongoose.Types.ObjectId('67fa2871814d6115058dd5d0'),
    doctor: 'Dr. Chen',
    treatmentDate: new Date('2025-04-12'),
    treatmentType: 'Whitening',
    treatmentDetails: 'Tooth whitening treatment to remove stains.',
    status: 'Completed',
  },
];

// Connect and insert data
mongoose
  .connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(async () => {
    console.log('Connected to MongoDB.');

    // Optional: Clear existing data
    await Treatment.deleteMany({});
    console.log('Old treatment data cleared.');

    // Insert mock data
    await Treatment.insertMany(mockTreatments);
    console.log('Mock treatment data inserted.');

    mongoose.disconnect();
  })
  .catch(err => {
    console.error('MongoDB connection error:', err);
  });
