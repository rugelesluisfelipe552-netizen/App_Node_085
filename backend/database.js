/**
 * CONEXIÓN A LA BASE DE DATOS
 * 
 * Este archivo se encarga de conectar la aplicación
 * con la base de datos MongoDB usando Mongoose.
 */

const mongoose = require('mongoose');

// Dirección de la base de datos MongoDB
const URI = 'mongodb://localhost/empleados_085';

// Se realiza la conexión a la base de datos
mongoose.connect(URI)
    .then(db => console.log('La DB se encuentra conectada'))
    .catch(err => console.error(err));

// Se exporta mongoose para ser usado en otros archivos
module.exports = mongoose;

