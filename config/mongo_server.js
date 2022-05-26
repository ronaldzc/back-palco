
const mongoose = require('mongoose');

//funcion para conectar a la base de datos
const dbConnect = () => {
    const DB_URI = process.env.BD_URI;

    mongoose.connect(DB_URI, { 
        useNewUrlParser: true, 
        useUnifiedTopology: true 
    }, (err) => {
        if (err) {
            console.log('***** Error de conexion a la BD *****')
        } else {
            console.log('***** Conexion a la BD exitosa *****');
        }
    });
}

module.exports = dbConnect;