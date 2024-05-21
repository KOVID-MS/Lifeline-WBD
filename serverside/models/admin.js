const mongoose = require('mongoose');
const { INTEGER } = require('sequelize');

const userSchema = new mongoose.Schema({
  doctorId:{
    type:INTEGER,
  },
  name: {
    type: String,
    required: true
  },
  specialty: {
    type: String,
    required: true
  }
});

const Doctor = mongoose.model('Doctor', doctorSchema);

module.exports = Doctor;
