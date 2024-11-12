// models/Servicio.js
const { DataTypes } = require('sequelize');
const { sequelize } = require('../database/config');

const Servicio = sequelize.define('servicio', {
  nombre: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  descripcion: {
    type: DataTypes.TEXT,
  },
  precio: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  duracion: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  activo: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
}, {
  timestamps: true, 
  createdAt: 'created_at',
  updatedAt: 'updated_at',
});

module.exports = Servicio;
