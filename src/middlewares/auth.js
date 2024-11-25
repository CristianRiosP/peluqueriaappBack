const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

/**
 * Middleware para verificar el token JWT desde el cuerpo de la solicitud.
 * @param {Object} req - La solicitud HTTP
 * @param {Object} res - La respuesta HTTP
 * @param {Function} next - Función para continuar al siguiente middleware o ruta
 */

// Middleware para verificar el token JWT
const verificarToken = (req, res, next) => {
  // Obtener el token del cuerpo de la solicitud
  const { token } = req.body;  // El token se envía en el cuerpo de la solicitud

  if (!token) {
      return res.status(401).json({ mensaje: 'No se proporcionó token en el cuerpo de la solicitud' });
  }

  try {
      // Verificar y decodificar el token
      const usuario = jwt.verify(token, config.JWT_SECRET);  // 'config.JWT_SECRET' es tu clave secreta
      req.usuario = usuario;  // Guardamos la información del usuario en el objeto 'req'
      next();  // Continuamos con la siguiente función de middleware o ruta
  } catch (error) {
      // Si el token es inválido o ha expirado, respondemos con un error
      return res.status(401).json({ mensaje: 'Token inválido o expirado' });
  }
};

module.exports = verificarToken;