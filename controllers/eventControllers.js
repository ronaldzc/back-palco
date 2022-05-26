//importamos el modelo de event
const { eventModel } = require('../models')


//importamos el file system
const fs = require('fs')
// const path = require('path')

// definimos las credenciales de almacenamiento de la imagen
const PUBLIC_URL = process.env.PUBLIC_URL;

const getEvents = async (req, res) => {
    try {
        //identifica al usuario en session
        // const user = req.user
        //***** */
        const event = await eventModel.find().populate('stadium', {
            stadiumname: 1,
            image: 1,
            city: 1,
            privatebox: 1
        })

        // res.json(event)
        res.send({ event, 'message': 'Lista de eventos' })

    } catch (error) {
        res.status(404).send({ message: 'Error al obtener los eventos' })
    }

}

const getEvent = async (req, res) => {
    try {
        const pk = req.params.id

        const event = await eventModel.findById(pk).populate('stadium', {
            stadiumname: 1,
            image: 1,
            city: 1,
            privatebox: 1

        })
        res.send({ event, 'message': 'lista evento detalle' })

    } catch (error) {
        res.status(404).send({ message: 'Error al obtener el evento' })
    }

}

const createEvent = async (req, res) => {
    try {

        const { eventname, date, stadium, description, price } = req.body
        const image = req.file
        
        if (image) {
            const event = await eventModel.create({
                eventname,
                image: `${PUBLIC_URL}/${image.filename}`,
                date,
                stadium,
                description,
                price,

            })

            res.send({ event, 'message': 'Evento creado' })
        } else {
            const event = await eventModel.create({
                eventname,
                image: null,
                date,
                stadium,
                description,
                price,

            })
            await event.save()
            res.send({ event, 'message': 'Evento creado' })
        }

    } catch (error) {
        res.status(404).send({ message: 'Error al crear el evento' })
    }
}

const deleteEvent = async (req, res) => {
    try {
        const pk = req.params.id
        const event = await eventModel.findByIdAndDelete(pk)

        if (event) {
            await fs.unlinkSync(path.resolve(event.image))
            res.send({ event, 'message': 'Evento eliminado' })
        }

    } catch (error) {
        res.status(404).send({ message: 'Error al eliminar el evento' })
    }

}

const updateEvent = async (req, res) => {
    try {

        const pk = req.params.id
        const { eventname, date, stadium, description, price } = req.body
        const image = req.file

        if (image) {
            const event = await eventModel.findByIdAndUpdate(
                pk,
                {
                    eventname,
                    image: `${PUBLIC_URL}/${image.filename}`,
                    date,
                    stadium,
                    description,
                    price,

                },
                { new: true }
            )
            res.send({ event, 'message': 'Evento Actualizado' })
        } else {
            const event = await eventModel.findByIdAndUpdate(
                pk,
                {
                    eventname,
                    image: null,
                    date,
                    stadium,
                    description,
                    price,
                },
                { new: true }
            )
            res.send({ event, 'message': 'Evento Actualizado' })
        }

    } catch (error) {
        res.status(404).send({ message: 'Error al actualizar el evento' })

    }
}

module.exports = { getEvents, getEvent, createEvent, deleteEvent, updateEvent }