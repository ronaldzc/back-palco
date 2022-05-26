const { ownerModel } = require('../models');

const getOwners = async (req, res) => {
    try {
        const owner = await ownerModel.find()
        res.send({ owner, 'message': 'Lista de propietarios' })

    } catch (error) {
        res.status(404).send({ message: 'Error al obtener los owners' })
    }
}

const getOwner = async (req, res) => {
    try {
        const pk = req.params.id
        const owner = await ownerModel.findById(pk)
        res.send({ owner, 'message': 'lista owner detalle' })

    } catch (error) {
        res.status(404).send({ message: 'Error al obtener el owner' })
    }
}

const createOwner = async (req, res) => {
    try {
        const {body} = req
        
        const owner = await ownerModel.create(body)
        console.log({owner})


        res.send({ owner, 'message': 'Propietario creado' })

    } catch (error) {
        res.status(404).send({ message: 'Error al crear el Propietario' })
    }
}

const updateOwner = async (req, res) => {
    try {
        const pk = req.params.id
        const { username, password, name, email, dni, phone } = req.body
        const owner = await ownerModel.findByIdAndUpdate(pk, {
            username,
            password,
            name,
            email,
            dni,
            phone
        })
        res.send({ owner, 'message': 'Propietario actualizado' })

    } catch (error) {
        res.status(404).send({ message: 'Error al actualizar el owner' })
    }
}

const deleteOwner = async (req, res) => {
    try {
        const pk = req.params.id
        const owner = await ownerModel.findByIdAndDelete(pk)
        res.send({ owner, 'message': 'Propietario eliminado' })

    } catch (error) {
        res.status(404).send({ message: 'Error al eliminar el owner' })
    }
}

module.exports = { getOwners, getOwner, createOwner, updateOwner, deleteOwner }