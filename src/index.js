const express = require('express');
const cors = require('cors');

const v1ServicioRoutes = require("./v1/routes/servicioRoutes");
const { swaggerDocs: V1SwaggerDocs} = require("./v1/swagger");
const {dbConexion} =require("./database/config");
 



const app = express();
app.use(cors());
const PORT = process.env.PORT || 3000;


//Middleware
app.use(express.json());


//Routes
app.use("/api/v1/servicio", v1ServicioRoutes)


const startServer = async () => {
    try {
        await dbConexion(); // Llama a la función para conectar a la base de datos
        app.listen(PORT, () => {
            console.log(`🚀 Server is running on port ${PORT}`);
            V1SwaggerDocs(app, PORT);
        });
    } catch (error) {
        console.error('Error en la conexión a la base de datos:', error);
    }
};
startServer();