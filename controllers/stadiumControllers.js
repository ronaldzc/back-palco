const { stadiumModel } = require('../models');

// importamos el file FileSystem
const fs = require('fs')

// definimos las credenciales del almacenamiento de la imagen
const PUBLIC_URL = process.env.PUBLIC_URL;

const getStadiums = async (req, res) => {
    try {
        const stadium = await stadiumModel.find()
        res.send({ stadium, 'message': 'Lista de estadios' })

    } catch (error) {
        res.status(404).send({ message: 'Error al obtener los estadios' })
    }
}

const getStadium = async (req, res) => {
    try {
        const pk = req.params.id
        const stadium = await stadiumModel.findById(pk)
        res.send({ stadium, 'message': 'lista estadio detalle' })

    } catch (error) {
        res.status(404).send({ message: 'Error al obtener el estadio' })
    }

}

const createStadium = async (req, res) => {
    try {
        const image = req.file
        const { stadiumname, city, private_box } = req.body

        const stadium = await stadiumModel.create(
            {
                stadiumname,
                image: image ? `${PUBLIC_URL}/${image.filename}` : null,
                city,
                private_box,
            }
        )

        res.send({ stadium, 'message': 'Estadio creado' })


    } catch (error) {
        res.status(404).send({ message: 'Error al crear el estadio' })
    }

}

const updateStadium = async (req, res) => {
    try {
        const pk = req.params.id
        const image = req.file
        const { stadiumname, city, private_box } = req.body
        const stadium = await stadiumModel.findByIdAndUpdate(pk, {
            stadiumname,
            image: image ? `${PUBLIC_URL}/${image.filename}` : null,
            city,
            private_box,
        },
            { new: true }
        )
        res.send({ stadium, 'message': 'Estadio actualizado' })

    } catch (error) {
        res.status(404).send({ message: 'Error al actualizar el estadio' })
    }

}

const deleteStadium = async (req, res) => {
    try {
        const pk = req.params.id
        const stadium = await stadiumModel.findByIdAndDelete(pk)
        res.send({ stadium, 'message': 'Estadio eliminado' })

    } catch (error) {
        res.status(404).send({ message: 'Error al eliminar el estadio' })
    }

}

module.exports = { getStadiums, getStadium, createStadium, updateStadium, deleteStadium }