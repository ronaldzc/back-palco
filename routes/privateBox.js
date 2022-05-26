const express = require('express')
const router = express.Router()


// requerimos al controllers
const { getPrivateBox, getPrivateBoxes, createPrivateBox, updatePrivateBox, deletePrivateBox } = require('../controllers/privateBoxControllers')

router.get('/', getPrivateBoxes)
router.post('/', createPrivateBox)

router.get('/:id', getPrivateBox)
router.put('/:id', updatePrivateBox)
router.delete('/:id', deletePrivateBox)

module.exports = router
