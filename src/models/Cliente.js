// models/Cliente.js
const { DataTypes } = require('sequelize');
const { sequelize } = require('../database/config');

const Cliente = sequelize.define('cliente', {
  nombre: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  telefono: {
    type: DataTypes.STRING(15),
  },
  email: {
    type: DataTypes.STRING(100),
    unique: true,
  },
  fecha_registro: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
}, {
  timestamps: true, 
  createdAt: 'created_at',
  updatedAt: 'updated_at',
});

module.exports = Cliente;
