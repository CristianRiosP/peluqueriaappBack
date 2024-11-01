const {DataTypes} =  require('sequelize'); 
const {dbConexion, sequelize} = require('../database/config');


// const Servicio = dbConexion.define('Servicio',{

//     nombre:{
//         type: DataTypes.STRING,
//         allowNull: false
//     },
//     descripcion:{ 
//         type: DataTypes.TEXT
//     },
//     precio:{
//         type: DataTypes.DECIMAL(10,2),
//         allowNull: false
//     },
//     duracion:{
//         type: DataTypes.INTEGER,
//         allowNull: false
//     },
//     activo:{
//         type: DataTypes.BOOLEAN,
//         defaultValue: 1
//     }

//     });
const Servicio = sequelize.define('servicio',{

        nombre:{
            type: DataTypes.STRING,
            allowNull: false
        },
        descripcion:{ 
            type: DataTypes.TEXT
        },
        precio:{
            type: DataTypes.DECIMAL(10,2),
            allowNull: false
        },
        duracion:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        activo:{
            type: DataTypes.BOOLEAN,
            defaultValue: 1
        }
    
        });
 module.exports = Servicio;