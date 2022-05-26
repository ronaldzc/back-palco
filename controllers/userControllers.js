const { userModel } = require('../models');


//modulo para encryptar el password
const { encryptPassword } = require('../utils/handlePassword')
const { tokenSing } = require('../utils/handleJWT');
/*/crud de usuarios/*/

const getUsers = async (req, res) => {
    try {
        const user = await userModel.find()
        res.send({ user, 'message': 'Lista de usuarios' })

    } catch (error) {
        res.status(404).send({ message: 'Error al obtener los usuarios' })
    }
}

const getUser = async (req, res) => {
    try {
        const pk = req.params.id
        const user = await userModel.findById(pk)
        res.send({ user, 'message': 'lista usuario detalle' })

    } catch (error) {
        res.status(404).send({ message: 'Error al obtener el usuario' })
    }

}

const createUser = async (req, res) => {
    try {
        const body = req.body
        const password = await encryptPassword(body.password)
        // const { username, name, dni, email, phone, roles } = req.body

        const joinBody = {...body, password}

        const dataUser = await userModel.create(joinBody)
        // dataUser.set('password', undefined, { strict: false })
        // Creamos el JWT
       const data = {
           token: await tokenSing(dataUser),
           user: dataUser,
       }

      res.send({ data, 'message': 'Usuario creado' })
        
    } catch (error) {
        res.status(404).send({ message: 'Error al crear el usuario' })
    }
}

const updateUser = async (req, res) => {
    try {
        const pk = req.params.id
        const password = await encryptPassword(req.body.password)
        
        const { username, name, dni, email, phone, roles } = req.body
        const user = await userModel.findByIdAndUpdate(
            pk, 
            { username, password, name, dni, email, phone, roles },
            { new: true }
        )
        // user.set('password', undefined, { strict: false })
            const data = {
                token: await tokenSing(user),
                user: user,
            }
            
        res.send({ data, 'message': 'Usuario actualizado' })
    } catch (error) {
        res.status(404).send({ message: 'Error al actualizar el usuario' })
    }

}

const deleteUser = async (req, res) => {
    try {
        const pk = req.params.id
        const user = await userModel.findByIdAndDelete(pk)
        res.send({ user, 'message': 'Usuario eliminado' })

    } catch (error) {
        res.status(404).send({ message: 'Error al eliminar el usuario' })
    }
}

module.exports = { getUsers, getUser, createUser, updateUser, deleteUser }