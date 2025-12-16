const Servicio = require('../models/servicios');

const servicioCtrl = {};

// Obtener todos los servicios
servicioCtrl.getServicios = async (req, res) => {
  const servicios = await Servicio.find();
  res.json(servicios);
};

// Crear servicio
servicioCtrl.createServicio = async (req, res) => {
  const servicio = new Servicio(req.body);
  await servicio.save();
  res.json({ status: 'Servicio guardado' });
};

// Obtener un servicio por ID
servicioCtrl.getServicio = async (req, res) => {
  const servicio = await Servicio.findById(req.params.id);
  res.json(servicio);
};

// Actualizar servicio
servicioCtrl.updateServicio = async (req, res) => {
  const { id } = req.params;
  await Servicio.findByIdAndUpdate(id, { $set: req.body }, { new: true });
  res.json({ status: 'Servicio actualizado' });
};

// Eliminar servicio
servicioCtrl.deleteServicio = async (req, res) => {
  await Servicio.findByIdAndDelete(req.params.id);
  res.json({ status: 'Servicio eliminado' });
};

module.exports = servicioCtrl;

