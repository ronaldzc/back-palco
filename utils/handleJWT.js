//modulo para crear tokens
const jwt = require('jsonwebtoken')
const JWT_SECRET = process.env.JWT_SECRET


//Obtner el objeto user para firmar con el token jwt
const tokenSing = async (user) => {
    const sign =   jwt.sign({
        _id: user._id,
        username: user.username,
        password: user.password,
        // roles: user.roles
    }, JWT_SECRET, { expiresIn: '2h' })

    return sign
}

//verificamos el token de la jwt y q este firmado para mantener la sesion
const verifyToken = async (token) => {
    try {
        const checkToken =  jwt.verify(token, JWT_SECRET)
        return checkToken
        
    } catch (error) {
        return null
    }

}


module.exports = { tokenSing, verifyToken }
