const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('appBelleza', 'root', '1234', {
    host: 'mysql_container',//host: 'localhost', // O '127.0.0.1'
    dialect: 'mysql',
    port: 3306,
    dialectOptions: {
        ssl: {
            require: true, 
            rejectUnauthorized: false
        },
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