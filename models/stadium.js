const mongoose = require('mongoose')

// Direccion de la base de datos
// mongoose.connect('')

const SchemaTypes = mongoose.Schema.Types

const StadiumSchema = new mongoose.Schema({

  stadiumname: {
    type: String,
    // required: true
  },

  image: {
    type: String,
    //  required: true
  },

  city: {
    type: String,
    // required: true
  },

  private_box: {
    type: SchemaTypes.ObjectId,
    ref: 'privatebox'
  }

}, {
  timestamps: true
})



module.exports = mongoose.model('stadium', StadiumSchema)