// const { Sequelize } = require('sequelize');

// const db = new Sequelize('appBelleza','root','', {
//     host: 'localhost',
//     port: 3306, // default port for SQL Server
//     dialect: 'mssql', /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
//     //logging:false
//     dialectOptions: {
//         connectTimeout: 10000,
//     },
  
//   });

// module.exports = db;

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('appBelleza', 'root', '1234', {
    host: 'mysql_container',//host: 'localhost', // O '127.0.0.1'
    dialect: 'mysql',
    port: 3306,
    dialectOptions: {
        // Añadir esta opción
        ssl: {
            require: true, // Si estás usando SSL
            rejectUnauthorized: false // Dependiendo de tu configuración
        },
        // Esta es la clave que necesitas para permitir la recuperación de clave pública
        allowPublicKeyRetrieval: true,
    },
});

const dbConexion = async () => {
    try {
        await sequelize.authenticate();
        console.log('Database connected successfully');
    } catch (error) {
        console.error('Unable to connect to the database:', error.message);
        throw error; // Lanza el error para que sea capturado más arriba
    }
};

module.exports =  {dbConexion,sequelize} ;