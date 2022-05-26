/**
 * Modelo Evento
 */

const mongoose = require('mongoose')

// Direccion de la base de datos
// mongoose.connect('')

const SchemaTypes = mongoose.Schema.Types

const EventSchema = new mongoose.Schema({

  eventname: { type: String },

  image: { type: String },

  date: { type: Date },

  stadium: { 
    type: SchemaTypes.ObjectId,
    ref: 'stadium'
  },

  description: { type: String },
 
  // status: { type: String },

  price: { type: Number },

     
  

},{
    timestamps: true
})


module.exports = mongoose.model('event', EventSchema)
