const { Sequelize } = require('sequelize');
const dotenv = require('dotenv');


dotenv.config();


const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST || 'localhost', 
    dialect: 'mysql',
    port: process.env.DB_PORT || 3306,       
    dialectOptions: {
        ssl: process.env.DB_SSL === 'true' ? true : false, 
    },
    logging: process.env.DB_LOGGING === 'true',  
});


const dbConexion = async () => {
    try {
        await sequelize.authenticate();
        console.log('Conexión a la base de datos exitosa');
    } catch (error) {
        console.error('No se pudo conectar a la base de datos:', error.message);
        throw error; 
    }
};

module.exports = {
    dbConexion,
    sequelize
};