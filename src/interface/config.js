const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');


const v1BarberiaRoutes = require("./v1/routes/barberiaRoutes");
const dotenv = require('dotenv');
const authRoutes = require("./v1/routes/authRoutes");
const verificarToken=require("./v1/routes/userRoutes");


const { swaggerDocs: V1SwaggerDocs} = require("./v1/swagger");
const {dbConexion,sequelize} =require("../infraestructure/database/config");
const seedDatabase = require("../infraestructure/database/Seeds/seed");



const app = express();
app.use(cors());
app.use(bodyParser.json()); 
const PORT = process.env.PORT || 3000;


//Middleware
app.use(express.json());


//Routes
app.use("/api/v1/barberias", v1BarberiaRoutes)
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/checkToken", verificarToken);




const startServer = async () => {
    try {
        await dbConexion();
        
      
        app.listen(PORT, () => {
            console.log(`🚀 Server is running on port ${PORT}`);
            V1SwaggerDocs(app, PORT);
        });
     // await seedDatabase();
    } catch (error) {
        console.error('Error en la conexión a la base de datos:', error);
    } 
};
module.exports = { startServer};
