const { privateBoxModel } = require('../models');

const getPrivateBoxes = async (req, res) => {
    try {
        const privateBox = await privateBoxModel.find().populate('owner', {
            name: 1,
            dni: 1,
            phone: 1

        })
        res.send({ privateBox, 'message': 'Lista de palcos' })
    } catch (error) {
        res.status(404).send({ message: 'Error al obtener los palcos' })
    }
}

const getPrivateBox = async (req, res) => {
    try {
        const pk = req.params.id
        const privateBox = await privateBoxModel.findById(pk).populate('owner', {
            name: 1,
            dni: 1,
            phone: 1

        })
        res.send({ privateBox, 'message': 'lista palco detalle' })

    } catch (error) {
        res.status(404).send({ message: 'Error al obtener el palco' })
    }

}

const createPrivateBox = async (req, res) => {
    try {
        const body= req.body
        
        const privateBox = await privateBoxModel.create(body)
        res.send({ privateBox, 'message': 'Palco creado' })

    } catch (error) {
        res.status(404).send({ message: 'Error al crear el palco' })
    }

}

const updatePrivateBox = async (req, res) => {
    try {
        const pk = req.params.id
        const body= req.body
        const privateBox = await privateBoxModel.findByIdAndUpdate(pk, body)

        res.send({ privateBox, 'message': 'Palco actualizado' })

    } catch (error) {
        res.status(404).send({ message: 'Error al actualizar el palco' })
    }

}

const deletePrivateBox = async (req, res) => {
    try {
        const pk = req.params.id
        const privateBox = await privateBoxModel.findByIdAndDelete(pk)
        
        res.send({ privateBox, 'message': 'Palco eliminado' })

    } catch (error) {
        res.status(404).send({ message: 'Error al eliminar el palco' })
    }

   
}

module.exports = { getPrivateBoxes, getPrivateBox, createPrivateBox, updatePrivateBox, deletePrivateBox }