// models/Tooth.js
const mongoose = require('mongoose')

const toothSchema = new mongoose.Schema({
  name: String,
  code: String, // UL1, LR6
  location: String, // 'upper-left', 'lower-right'
  type: String, // 'molar', 'incisor', 'canine', 'premolar', 'wisdom'
})

module.exports = mongoose.model('Tooth', toothSchema)
