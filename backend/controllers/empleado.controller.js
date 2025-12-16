/**
 * CONTROLADOR DE EMPLEADOS
 * 
 * Este archivo maneja las operaciones CRUD de los empleados.
 * Se comunica con la base de datos usando el modelo Empleado.
 */

// Importa el modelo Empleado
const Empleado = require('../models/Empleado');

// Objeto controlador
const empleadoCtrl = {};

/**
 * OBTENER TODOS LOS EMPLEADOS
 * Método: GET
 */
empleadoCtrl.getEmpleados = async (req, res) => {
  const empleados = await Empleado.find();
  res.json(empleados);
}

/**
 * CREAR UN EMPLEADO
 * Método: POST
 */
empleadoCtrl.createEmpleados = async (req, res) => {
  const empleado = new Empleado(req.body);
  await empleado.save();
  res.json({ status: 'Empleado guardado' });
}

/**
 * OBTENER UN SOLO EMPLEADO
 * Método: GET
 */
empleadoCtrl.getUnicoEmpleado = async (req, res) => {
  const empleadoUnico = await Empleado.findById(req.params.id);
  res.json(empleadoUnico);
}

/**
 * ACTUALIZAR UN EMPLEADO
 * Método: PUT
 */
empleadoCtrl.editarEmpleado = async (req, res) => {
  const { id } = req.params;

  const emepleadoEdit = {
    name: req.body.name,
    position: req.body.position,
    office: req.body.office,
    salary: req.body.salary
  };

  await Empleado.findByIdAndUpdate(id, { $set: emepleadoEdit }, { new: true });
  res.json({ status: 'Empleado Actualizado' });}

/**
 * ELIMINAR UN EMPLEADO
 * Método: DELETE
 */
empleadoCtrl.eliminarEmpleado = async (req, res) => {
  await Empleado.findByIdAndDelete(req.params.id);
  res.json({ status: 'Empleado Eliminado' });}

// Exporta el controlador
module.exports = empleadoCtrl;
