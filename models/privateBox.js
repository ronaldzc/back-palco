//Creo que este no va

/**
 * Modelo Palco
 */

const mongoose = require('mongoose')

// Direccion de la base de datos
// mongoose.connect('')

const SchemaTypes = mongoose.Schema.Types

let PrivateBoxSchema = mongoose.Schema({
  boxnumber: {
    type: String,
    required: true
  },
  zone: {
    type: String,
    required: true
  },
  owner: {
    type: SchemaTypes.ObjectId,
    ref: 'owner'
  }
}, {
  timestamps: true
})



module.exports = mongoose.model('privateBox', PrivateBoxSchema)