//requerimos los modules de express
const express = require('express');
const router = express.Router();

// requerimos el modulo para obtener los file 
const fs = require('fs');

const PATH_ROUTES = __dirname

// funcion para leer el archivo de rutas y separar de la extension
const removeExtension = (filename) => {
    return filename.split('.').shift();
}

// script para leer el archivo de rutas y sin la extension
fs.readdirSync(PATH_ROUTES).filter(file => {
    const name = removeExtension(file)
    if (name !== 'index') {
        
        router.use(`/${name}`, require(`./${file}`));
    }

})

module.exports = router;
