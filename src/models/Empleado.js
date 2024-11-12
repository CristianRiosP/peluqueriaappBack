// models/Empleado.js
const { DataTypes } = require('sequelize');
const { sequelize } = require('../database/config');

const Empleado = sequelize.define('empleado', {
  nombre: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  telefono: {
    type: DataTypes.STRING(15),
  },
  especialidad: {
    type: DataTypes.STRING(100),
  },
  fecha_ingreso: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
}, {
  timestamps: true, 
  createdAt: 'created_at',
  updatedAt: 'updated_at',
});

module.exports = Empleado;
