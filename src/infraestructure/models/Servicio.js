// models/Servicio.js
const { DataTypes } = require('sequelize');
const { sequelize } = require('../database/config');
const BarberiaServicio = require('./BarberiaServicio');


const Servicio = sequelize.define('servicios', {
  nombre: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  descripcion: {
    type: DataTypes.TEXT,
  },
}, {
  timestamps: true, 
  createdAt: 'created_at',
  updatedAt: 'updated_at',
});
// Servicio.hasMany(BarberiaServicio, { foreignKey: 'fk_servicios_id' });

module.exports = Servicio;
