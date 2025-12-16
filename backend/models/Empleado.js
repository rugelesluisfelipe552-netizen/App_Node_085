/**
 * MODELO DE EMPLEADO
 * 
 * Este archivo define la estructura de los datos
 * que se guardan en la base de datos MongoDB.
 */

const mongoose = require('mongoose');

// Se obtiene el esquema de mongoose
const { Schema } = mongoose;

/**
 * Esquema del Empleado
 * Aquí se definen los campos que tendrá cada empleado
 */
const EmpleadoSchema = new Schema({

  // Nombre del empleado
  name: { type: String, require: true },

  // Cargo o puesto del empleado
  position: { type: String, require: true },

  // Oficina o ciudad donde trabaja
  office: { type: String, require: true },

  // Salario del empleado (número)
  salary: { type: Number, require: true },

});

// Se exporta el modelo Empleado para usarlo en el controlador
module.exports = mongoose.model('Empleado', EmpleadoSchema);

