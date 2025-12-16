/**
 * ARCHIVO PRINCIPAL DEL SERVIDOR
 * 
 * Este archivo configura y levanta el servidor backend
 * usando Express.
 */

const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

// Se crea la aplicación de Express
const app = express();

// Se importa la conexión a la base de datos
const { mongoose } = require('./database');

/**
 * CONFIGURACIONES DEL SERVIDOR
 */

// Se define el puerto del servidor
app.set('port', process.env.PORT || 3000);

// Muestra las peticiones en consola
app.use(morgan('dev'));

// Permite que el servidor entienda datos en formato JSON
app.use(express.json());

// Permite la comunicación con el frontend
app.use(cors({ origin: 'http://localhost:3001' }));

/**
 * RUTAS DEL SERVIDOR
 */

// Rutas para empleados
app.use('/api/empleados', require('./routes/empleado.routes'));
// Rutas para los servicios
app.use('/api/servicios', require('./routes/servicios.routes'));


/**
 * INICIO DEL SERVIDOR
 */

// Se inicia el servidor en el puerto configurado
app.listen(app.get('port'), () => {
    console.log('server activo en el puerto', app.get('port'));
});

