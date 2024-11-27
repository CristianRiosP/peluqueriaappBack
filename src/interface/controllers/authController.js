const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const dotenv = require('dotenv');
const User = require('../../infraestructure/models/User');
const { generateJWT } = require('../../utils/jwt');
dotenv.config();


const login = async (req, res) => {
  const { username, password } = req.body;

  console.log( username, password)
  try {
    
    const existingUser = await User.findOne({ where: { username } });

    
    if (!existingUser) {

     return res.status(401).json({ error: 'Credenciales inválidas.' });
    }

       
    bcrypt.compare(password, existingUser.password, (err, isMatch) => {
      if (err || !isMatch) {
        return res.status(401).json({ error: 'Credenciales inválidas.' });
      }

    const id= existingUser.id
    const avatar=existingUser.avatar
    const nombre=existingUser.nombre
      
      const token = jwt.sign(
        { id: existingUser.id, username: existingUser.username },
        process.env.JWT_SECRET,  
        { expiresIn: process.env.JWT_EXPIRATION || '1h' } 
      );

      
      return res.json({ token,  id, nombre ,avatar });
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error en el login' });
  }
};

const register = async (req, res) => {
  const { username, password, nombre } = req.body;


  try {
    const existingUser = await User.findOne({ where: { username } });
    if (existingUser) {
      return res.status(409).json({ message: 'El usuario ya existe' });
    }

 
    const hashedPassword = await bcrypt.hash(password, 10);

    // Crear el nuevo usuario con la contraseña encriptada
    const newUser = await User.create({
      username,
      password: hashedPassword,
      nombre
    });

    const token = generateJWT(newUser.id);
   
    res.status(201).json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al registrar el usuario' });
  }
};


module.exports = { login, register };