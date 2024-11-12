// models/Cita.js
const { DataTypes } = require('sequelize');
const {sequelize} = require('../database/config');
const Cliente = require('./Cliente');
const Empleado = require('./Empleado');
const Servicio = require('./Servicio');

const Cita = sequelize.define('cita', {
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
Cita.belongsTo(Cliente, { foreignKey: 'fk_cliente_id' });
Cita.belongsTo(Empleado, { foreignKey: 'fk_empleado_id' });
Cita.belongsTo(Servicio, { foreignKey: 'fk_servicio_id' });

module.exports = Cita;
