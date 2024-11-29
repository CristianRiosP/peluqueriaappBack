const { DataTypes } = require('sequelize');
const { sequelize } = require('../database/config');
const BarberiaServicio = require('./BarberiaServicio');

const Barberia = sequelize.define('barberias', {
  nombre: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  avatar: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  telefono: {
    type: DataTypes.STRING(15),
  },
  tipo: {
    type: DataTypes.TEXT,
  },
}, {
  timestamps: true,
  createdAt: 'created_at',
  updatedAt: 'updated_at',
});
// Barberia.hasMany(BarberiaServicio, { foreignKey: 'fk_barberia_id' });



module.exports = Barberia;