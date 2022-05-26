/**
 * Modelo Propietario del Palco
 */

const mongoose = require('mongoose')

// Direccion de la base de datos
// mongoose.connect('')



const OwnerSchema = new mongoose.Schema({
  username: {
    type: String,
    // required: true
  },
  password: {
    type: String,
    // required: true
  },

  name: {
    type: String,
    // required: true
  },
 
  email:{
    type: String,
    // required: true
  },
  dni: {
    type: String,
    // required: true
  },

  phone: {
    type: Number,
    // required: true
  },
 
},{
  timestamps: true
})



module.exports = mongoose.model('owner', OwnerSchema)