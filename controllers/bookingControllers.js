const { bookingModel } = require('../models')

//CRUD

const getBookings = async (req, res) => {
  try {
    const data = await bookingModel.find().populate('event', {
      eventname:1,
      date:1,
      image:1
    }).populate('user', {
      name:1,
      roles:1
    })
    
    res.send({ data, 'message': 'Lista de reservas' })
  } catch (error) {
    res.status(404).send({ message: 'Error al obtener las reservas' })
  }

}

const getBooking = async (req, res) => {
  try {
    const pk= req.params.id
    const data = await bookingModel.findById(pk).populate('event', {
      eventname:1,      
      image:1,
      date:1,
      price:1,
      stadium:1,

    }).populate('user', {
      name:1,
      roles:1
    })
    
    res.send({ data, 'message': 'lista reserva detalle' })
  } catch (error) {
    res.status(404).send({ message: 'Error al obtener la reserva' })
  }
}
const createBooking = async (req, res) => {

  try {
    const { body } = req

    const data = await bookingModel.create(body)

    res.send({ data, 'message': 'Reserva creada' })
  } catch (error) {
    res.status(500).send({ message: 'Error al crear la reserva' })
  }
}

const deleteBooking = async (req, res) => {
  try {
    const pk = req.params.id
    
    const data = await bookingModel.findByIdAndDelete(pk)
    res.send({ data, 'message': 'Reserva Eliminada' })
  } catch (error) {
    res.status(500).send({ message: 'Error al eliminar la reserva' })
  }
}

const updateBooking = async (req, res) => {
  try {
    const pk = req.params.id
    
    const { body } = req
    
    const data = await bookingModel.findByIdAndUpdate(pk, body, {new: true})
       
    res.send({ data, 'message': 'Reserva Actualizado'})
  } catch (error) {

  }

}

module.exports = { getBookings, getBooking, createBooking, deleteBooking, updateBooking }