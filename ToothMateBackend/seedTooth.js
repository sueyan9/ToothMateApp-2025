require('dotenv').config()
const mongoose = require('mongoose')
const Tooth = require('./models/Tooth')

const mongoUri = process.env.MONGO_URI;

const teeth = [
  // Upper Left
  { name: 'Upper Left Wisdom Tooth', code: 'UL8', location: 'upper-left', type: 'wisdom' },
  { name: 'Upper Left Second Molar', code: 'UL7', location: 'upper-left', type: 'molar' },
  { name: 'Upper Left First Molar', code: 'UL6', location: 'upper-left', type: 'molar' },
  { name: 'Upper Left Second Premolar', code: 'UL5', location: 'upper-left', type: 'premolar' },
  { name: 'Upper Left First Premolar', code: 'UL4', location: 'upper-left', type: 'premolar' },
  { name: 'Upper Left Canine', code: 'UL3', location: 'upper-left', type: 'canine' },
  { name: 'Upper Left Lateral Incisor', code: 'UL2', location: 'upper-left', type: 'incisor' },
  { name: 'Upper Left Central Incisor', code: 'UL1', location: 'upper-left', type: 'incisor' },

  // Upper Right
  { name: 'Upper Right Wisdom Tooth', code: 'UR8', location: 'upper-right', type: 'wisdom' },
  { name: 'Upper Right Second Molar', code: 'UR7', location: 'upper-right', type: 'molar' },
  { name: 'Upper Right First Molar', code: 'UR6', location: 'upper-right', type: 'molar' },
  { name: 'Upper Right Second Premolar', code: 'UR5', location: 'upper-right', type: 'premolar' },
  { name: 'Upper Right First Premolar', code: 'UR4', location: 'upper-right', type: 'premolar' },
  { name: 'Upper Right Canine', code: 'UR3', location: 'upper-right', type: 'canine' },
  { name: 'Upper Right Lateral Incisor', code: 'UR2', location: 'upper-right', type: 'incisor' },
  { name: 'Upper Right Central Incisor', code: 'UR1', location: 'upper-right', type: 'incisor' },

  // Lower Left
  { name: 'Lower Left Wisdom Tooth', code: 'LL8', location: 'lower-left', type: 'wisdom' },
  { name: 'Lower Left Second Molar', code: 'LL7', location: 'lower-left', type: 'molar' },
  { name: 'Lower Left First Molar', code: 'LL6', location: 'lower-left', type: 'molar' },
  { name: 'Lower Left Second Premolar', code: 'LL5', location: 'lower-left', type: 'premolar' },
  { name: 'Lower Left First Premolar', code: 'LL4', location: 'lower-left', type: 'premolar' },
  { name: 'Lower Left Canine', code: 'LL3', location: 'lower-left', type: 'canine' },
  { name: 'Lower Left Lateral Incisor', code: 'LL2', location: 'lower-left', type: 'incisor' },
  { name: 'Lower Left Central Incisor', code: 'LL1', location: 'lower-left', type: 'incisor' },

  // Lower Right
  { name: 'Lower Right Wisdom Tooth', code: 'LR8', location: 'lower-right', type: 'wisdom' },
  { name: 'Lower Right Second Molar', code: 'LR7', location: 'lower-right', type: 'molar' },
  { name: 'Lower Right First Molar', code: 'LR6', location: 'lower-right', type: 'molar' },
  { name: 'Lower Right Second Premolar', code: 'LR5', location: 'lower-right', type: 'premolar' },
  { name: 'Lower Right First Premolar', code: 'LR4', location: 'lower-right', type: 'premolar' },
  { name: 'Lower Right Canine', code: 'LR3', location: 'lower-right', type: 'canine' },
  { name: 'Lower Right Lateral Incisor', code: 'LR2', location: 'lower-right', type: 'incisor' },
  { name: 'Lower Right Central Incisor', code: 'LR1', location: 'lower-right', type: 'incisor' },
]

async function seed() {
  try {
    await mongoose.connect(mongoUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('✅ Connected to MongoDB');

    await Tooth.deleteMany({});
    console.log('🗑️  Existing teeth data cleared');

    await Tooth.insertMany(teeth);
    console.log('✅ Teeth data inserted successfully');
  } catch (err) {
    console.error('Error seeding data:', err);
  } finally {
    mongoose.disconnect(); // end
  }
}
seed();


