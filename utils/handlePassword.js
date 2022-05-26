// modulo para encryptar el password
const bcrypt = require('bcryptjs')

// funciones para encriptar y comparar passwords
const encryptPassword = async (passwordPlain) => {
    const salt = bcrypt.genSaltSync(10)
    const hash = await bcrypt.hashSync(passwordPlain, salt)
    return hash
}

// comparar una contraseña con su hash encryptado
const comparePassword = async (passwordPlain, passwordHash) => {
    const result = await bcrypt.compare(passwordPlain, passwordHash)
    return result
}

module.exports = { encryptPassword, comparePassword }