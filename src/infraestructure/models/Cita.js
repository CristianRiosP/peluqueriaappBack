// models/Cita.js
const { DataTypes } = require('sequelize');
const {sequelize} = require('../database/config');
const Cliente = require('./Cliente');
const Empleado = require('./Empleado');
const Servicio = require('./Servicio');

const Cita = sequelize.define('citas', {
  fecha_hora: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  estado: {
    type: DataTypes.STRING(50),
    defaultValue: 'Programada',
  },
}, {
  timestamps: true, 
  createdAt: 'created_at',
  updatedAt: 'updated_at',
});

// Definición de las relaciones
Cita.belongsTo(Cliente, { foreignKey: 'clientes_id' });
Cita.belongsTo(Empleado, { foreignKey: 'empleados_id' });
Cita.belongsTo(Servicio, { foreignKey: 'servicios_id' });

module.exports = Cita;
