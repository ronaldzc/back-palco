//requerimos express para poder trabajar con rutas
const express = require('express');
const router = express.Router();

//requerimos el controlador
const { getBookings, getBooking, createBooking, deleteBooking, updateBooking } = require('../controllers/bookingControllers');

const {authSession} = require('../middlewares/sessionMiddlewars');

router.get('/', getBookings)
router.post('/', createBooking)

router.get('/:id', getBooking)
router.put('/:id',updateBooking)
router.delete('/:id', deleteBooking)

module.exports = router;