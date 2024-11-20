const { DataTypes } = require('sequelize');
const { sequelize } = require('../database/config');
const Barberia = require('./Barberia');
const Cliente = require('./Cliente');

const StarBarberia = sequelize.define('start_barberia', {
  valoracion: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  timestamps: true,
  createdAt: 'created_at',
  updatedAt: 'updated_at',
});
StarBarberia.belongsTo(Barberia, { foreignKey: 'fk_barberia_id' });
StarBarberia.belongsTo(Cliente, { foreignKey: 'fk_cliente_id' });


module.exports = StarBarberia;