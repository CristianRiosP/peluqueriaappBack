const express = require('express');
const cors = require('cors');

const v1BarberiaRoutes = require("./v1/routes/barberiaRoutes");
const { swaggerDocs: V1SwaggerDocs} = require("./v1/swagger");
const {dbConexion,sequelize} =require("../infraestructure/database/config");
const seedDatabase = require("../infraestructure/database/Seeds/seed");



const app = express();
app.use(cors());
const PORT = process.env.PORT || 3000;


//Middleware
app.use(express.json());


//Routes
app.use("/api/v1/barberias", v1BarberiaRoutes)


const startServer = async () => {
    try {
        await dbConexion();
        
      
        app.listen(PORT, () => {
            console.log(`🚀 Server is running on port ${PORT}`);
            V1SwaggerDocs(app, PORT);
        });
      await seedDatabase();
    } catch (error) {
        console.error('Error en la conexión a la base de datos:', error);
    } 
};
module.exports = { startServer};
