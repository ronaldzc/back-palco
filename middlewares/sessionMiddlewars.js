
const { userModel } = require('../models')
const { verifyToken } = require('../utils/handleJWT')


//middleare para autenticar usuarios y mantener sesiones
const authSession= async (req, res, next) => {
    try {
        if (!req.headers.authorization) {
            return res.status(401).send({ message: 'No tienes autorizacion' })
        }
        //divide  bearer y el token
        const token = req.headers.authorization.split(' ').pop()
        
        //verificamos la firma del token
        const dataToken =  await verifyToken(token)
       
        if (!dataToken._id) {
            return res.status(401).send({ message: 'None payload' })
        }
       
        //recuperamos el usuario en session
        const user = await userModel.findById(dataToken._id).select('username roles')
        req.user = user

        next()
    } catch (error) {

        res.status(401).send({ message: 'No autorizado' })
    }

}


module.exports = {authSession} 