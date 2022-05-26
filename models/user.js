/**
 * Modelo Usuario
 */

 const mongoose = require('mongoose')

// Direccion de la base de datos
// mongoose.connect('')

// const SchemaTypes = mongoose.Schema.Types

const UserSchema = new mongoose.Schema({

  username: { type: String },

  password: { type: String },
 
  name: { type: String },
    
  email:{ type: String },
   
  roles:{
    type:['Cliente', 'Propietario'],
    default: 'Cliente'
  }
  
 
},{
  timestamps: true
})

module.exports = mongoose.model('user', UserSchema)