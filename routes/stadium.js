const express = require('express')
const router = express.Router()

// requerimos el controllers
const { getStadiums, getStadium, createStadium, updateStadium, deleteStadium } = require('../controllers/stadiumControllers')

//requerimos el manejador de imagenes
const uploadFile = require('../utils/handleImage')

router.get('/', getStadiums)
router.post('/',
    uploadFile.single('image'),
    createStadium)

router.get('/:id', getStadium)
router.put('/:id',
    uploadFile.single('image'),
    updateStadium)

router.delete('/:id', deleteStadium)

module.exports = router