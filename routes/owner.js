const express = require('express')
const router = express.Router()

// requerimos el controllers
const {getOwner, getOwners, createOwner, updateOwner, deleteOwner} = require('../controllers/ownerControllers')

router.get('/', getOwners)
router.post('/', createOwner)

router.get('/:id', getOwner)
router.put('/:id', updateOwner)
router.delete('/:id', deleteOwner)

module.exports = router
