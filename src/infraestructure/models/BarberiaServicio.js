const { DataTypes } = require('sequelize');
const { sequelize } = require('../database/config');
const Barberia = require('./Barberia');
const Servicio = require('./Servicio');

const BarberiaServicio = sequelize.define('barberias_servicios', {
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
  },
}, {
  timestamps: true,
  createdAt: 'created_at',
  updatedAt: 'updated_at',
});
BarberiaServicio.belongsTo(Barberia, { foreignKey: 'fk_barberia_id' });
BarberiaServicio.belongsTo(Servicio, { foreignKey: 'fk_servicios_id' });


module.exports = BarberiaServicio;