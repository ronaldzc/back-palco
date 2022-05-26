
//requerir el paquete para leer las variables de entorno
require('dotenv').config();

const path = require('path');


const express = require('express');
const cors = require('cors');

//requerimos el config del mongo_server
const dbConnect = require('./config/mongo_server');



//establecer la conexion al servidor
const app = express();
const port = process.env.PORT || 3000;

//definimos la ruta publica para las imagenes
// app.use('/media', express.static(path.resolve('media')));
app.use(express.static('media'));
//invocamos al cors para hacer peticiones desde el servidor
app.use(cors());

//invocamos a las rutas
app.use(express.json());

app.use('/api', require('./routes'))


//iniciar el servidor para escuchar la conexión
app.listen(port, () => { console.log(`listening http://localhost:${port}`);
})

//invocamos la conexion a la base de datos
dbConnect();