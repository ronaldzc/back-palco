/**
 * Modelo Reserva
 */

const mongoose = require('mongoose')

// Direccion de la base de datos
// mongoose.connect('')

const SchemaTypes = mongoose.Schema.Types

const BookingSchema = new mongoose.Schema({
  user: {
    type: SchemaTypes.ObjectId,
    ref: 'user'
  },
  event: {
    type: SchemaTypes.ObjectId,
    ref: 'event'
  },
  observacion: {
    type: String,
    // required: true
  },
  credit: {
    type: ['credito','debito'],
    default: 'credito',
    // required: true
  }

},{
  timestamps: true
})

module.exports = mongoose.model('booking', BookingSchema)