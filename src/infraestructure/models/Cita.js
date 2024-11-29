// models/Cita.js
const { DataTypes } = require('sequelize');
const {sequelize} = require('../database/config');
const Cliente = require('./Cliente');
const Barbero = require('./Barbero');
const Servicio = require('./Servicio');
const Barberia = require('./Barberia');

const Cita = sequelize.define('citas', {
  fecha_cita: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  barbero:{
    type: DataTypes.STRING(50),
  },
  estado: {
    type: DataTypes.INTEGER,
  },
  hora_inicio: {
    type:  DataTypes.TIME,
  },
  hora_fin: {
    type: DataTypes.TIME,
  },
}, {
  timestamps: true, 
  createdAt: 'created_at',
  updatedAt: 'updated_at',
});

// Definición de las relaciones
Cita.belongsTo(Cliente, { foreignKey: 'clientes_id' });
// Cita.belongsTo(Barbero, { foreignKey: 'barbero_id' });
Cita.belongsTo(Servicio, { foreignKey: 'servicios_id' });
Cita.belongsTo(Barberia, { foreignKey: 'barberias_id' });

module.exports = Cita;
