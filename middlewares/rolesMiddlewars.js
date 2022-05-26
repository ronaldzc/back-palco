// definimos los roles permitidos en las sessiones

const checkRoles = (roles) => (req, res, next) => {
    try {
        //recuperamos el usuario en session del requset
        // const { user } = req
        const user = req.user

        //recuperamos los roles del usuario
        const rolesByUser = user.roles // ['Cliente', 'Propietario', ...]

        //comparamos los roles del usuario con los roles permitidos 
        const isMatchRol = roles.some(roleSingle => rolesByUser.includes(roleSingle))// devuelve true o false
        
        if (!isMatchRol) {//si es false
            res.status(403).send({ message: 'ERROR User not_permission' })
            return
        }
        next()//si es true

    } catch (error) {
        res.status(403).send({ message: 'Permiso denegado' })
    }
}

module.exports = { checkRoles }