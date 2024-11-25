const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUiExpress = require('swagger-ui-express');


const options = {
    definition: {
        openapi:"3.0.0",
        info: {title: "backend",version:"1.0.0"}
    },    securitySchemes: {
        BearerAuth: {
          type: "http",  // Tipo HTTP
          scheme: "bearer",  // Usamos el esquema 'bearer'
          bearerFormat: "JWT",  // Especificamos que es un token JWT
        },
      },
      
    apis: ["src/interface/v1/routes/barberiaRoutes.js", 
           "src/interface/v1/routes/authRoutes.js",
            "src/interface/v1/routes/userRoutes.js"
          ],
}


//Docs en Json Format

const swaggerSpec = swaggerJSDoc(options);

//funcion de setup de nuestra docs

const swaggerDocs = (app,port)=>{
    app.use('/api/v1/docs', swaggerUiExpress.serve, swaggerUiExpress.setup(swaggerSpec));
    app.get('/api/v1/docs.json',(req,res)=>{
        res.setHeader('Content-Type', 'application/json',);
        res.send(swaggerSpec);
    });
    console.log(`Docs API running on url http://localhost:${port}/api/v1/docs`);
};

module.exports = {swaggerDocs};
