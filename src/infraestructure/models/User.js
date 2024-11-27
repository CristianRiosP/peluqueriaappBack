const { DataTypes } = require('sequelize');
const { sequelize } = require('../database/config');



const Usuarios = sequelize.define('Usuarios', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,   
      autoIncrement: true, 
    },
    username: {
      type: DataTypes.STRING(255),
      allowNull: false,  
      unique: true,      
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: false,  
    },
    nombre: {
        type: DataTypes.STRING(255),
        allowNull: true,  
       },
       avatar: {
        type: DataTypes.TEXT,
        allowNull: true,  
       },
  }, {
    timestamps: true,  
    createdAt: 'created_at',
    updatedAt: false,  
  },);
  
 
  
  module.exports = Usuarios;