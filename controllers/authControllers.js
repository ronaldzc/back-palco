const { userModel } = require('../models')

//module encryptador de password
const { encryptPassword, comparePassword } = require('../utils/handlePassword')

//modulo para crear tokens
const { tokenSing } = require('../utils/handleJWT')

//esta funcion de registro esta por definir en que casos usar
const registerControllers = async (req, res) => {
    try {

        const body = req.body
        //passwrord encriptado
        const password = await encryptPassword(body.password)

        const joinBody = { ...body, password }

        const dataUser = await userModel.create(joinBody)

        dataUser.set('password', undefined, { strict: false })

        // Creamos el JWT
        const data = {
            token: await tokenSing(dataUser),
            user: dataUser,
        }
        
        // await data.save()
        res.send({ data, 'message': 'Usuario creado' })

    } catch (error) {
        res.send({ message: 'Error de registro' })
    }
}

//************       */
const loginControllers = async (req, res) => {
    try {
        // const user = await userModel.findOne({ username: req.body.username }).select('password')
        const user = await userModel.findOne({ username: req.body.username })
        
        const bodyPassword = req.body.password
        const hashPassword = user.password
        // const hashPassword = user.get('password')
        // console.log({hashPassword}, {bodyPassword})

        if (!user || !await comparePassword(bodyPassword, hashPassword)) {
            res.status(404).send({ message: 'Credenciales incorrectas' })
            return
        }
        //ocultamos la contraseña
        user.set('password', undefined, { strict: false })

        // Creamos el JWT
        const data = {
            token: await tokenSing(user),
            user,
        }

        res.send({ data, 'message': 'ok, login' })

    } catch (error) {
        res.status(404).send({ message: 'Error login' })
    }
}

module.exports = { registerControllers, loginControllers }
