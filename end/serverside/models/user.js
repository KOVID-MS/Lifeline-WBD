const mongoose = require('mongoose');
const { INTEGER } = require('sequelize');

const hotelSchema = new mongoose.Schema({
  hotelId:{
    type:INTEGER,
  },
  name: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true
  },
  filepath:{
    type:String
  }
});

const Hotel = mongoose.model('Hotel', hotelSchema);

module.exports = Hotel;
