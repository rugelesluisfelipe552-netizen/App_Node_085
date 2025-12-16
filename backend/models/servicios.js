const mongoose = require('mongoose');
const { Schema } = mongoose;

const ServicioSchema = new Schema({
  nombre: { type: String, required: true },
  descripcion: { type: String, required: true },
  precio: { type: Number, required: true },
  estado: { type: String, required: true }
});

module.exports = mongoose.model('Servicio', ServicioSchema);