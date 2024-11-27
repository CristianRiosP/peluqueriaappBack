const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();
// Clave secreta (debe ser guardada en un archivo de configuración o en variables de entorno)
const SECRET_KEY =process.env.JWT_SECRET; // Cambia esto por una clave secreta segura

// Función para generar el token JWT
const generateJWT = (userId) => {
  const payload = { id: userId };
  
  // Generar el token con un tiempo de expiración (ajústalo según tus necesidades)
  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: '1h' });

  return token;
};

module.exports = { generateJWT };