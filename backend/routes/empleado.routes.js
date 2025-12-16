/**
 * RUTAS DE EMPLEADOS
 * 
 * Este archivo define las rutas de la API para empleados.
 * Cada ruta se conecta con un método del controlador.
 */

// Se importa Express
const express = require('express');

// Se crea el router de Express
const router = express.Router();

// Se importa el controlador de empleados
const empleadoCtrl = require('../controllers/empleado.controller');

/**
 * RUTAS DEL CRUD
 */

// Obtener todos los empleados
router.get('/', empleadoCtrl.getEmpleados); 

// Crear un nuevo empleado
router.post('/', empleadoCtrl.createEmpleados);

// Obtener un empleado por su ID
router.get('/:id', empleadoCtrl.getUnicoEmpleado);

// Actualizar un empleado por su ID
router.put('/:id', empleadoCtrl.editarEmpleado);

// Eliminar un empleado por su ID
router.delete('/:id', empleadoCtrl.eliminarEmpleado);

// Se exportan las rutas
module.exports = router;
