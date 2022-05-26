const express = require('express')
const router = express.Router()

//importamos el manejador de Imagenes
const uploadFile = require('../utils/handleImage')

//importamos el middleware de session
const { authSession } = require('../middlewares/sessionMiddlewars')

//importamos el manejador de roles
const { checkRoles } = require('../middlewares/rolesMiddlewars')

//requerimos el controlador
const { getEvents, getEvent, createEvent, deleteEvent, updateEvent } = require('../controllers/eventControllers')

router.get('/',
    // authSession,
    getEvents)
router.post('/',
    // authSession,
    // checkRoles(['Propietario']),
    uploadFile.single('image'),
    createEvent
)

router.get('/:id', getEvent)
router.delete('/:id', deleteEvent)
router.put('/:id', uploadFile.single('image'), updateEvent)

module.exports = router