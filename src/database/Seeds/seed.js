// seed.js
const {sequelize} = require('../config'); // Ajusta la ruta según tu estructura
const Servicio = require('../../models/Servicio');
const Cliente = require('../../models/Cliente');
const Empleado = require('../../models/Empleado');
const Cita = require('../../models/Cita');

const seedDatabase = async () => {
    try {
         await sequelize.sync({ force: true });
        
        // Datos de ejemplo para Servicios
        const servicios = [
            { nombre: 'Corte de cabello', descripcion: 'Corte de cabello clásico.', precio: 15.00, duracion: 30 },
            { nombre: 'Manicure', descripcion: 'Manicure y pedicure.', precio: 25.00, duracion: 60 },
        ];
        await Servicio.bulkCreate(servicios);

        const clientes = [
            { nombre: 'Juan Pérez', telefono: '123456789', email: 'juan@example.com' },
            { nombre: 'Ana Gómez', telefono: '987654321', email: 'ana@example.com' },
        ];
        await Cliente.bulkCreate(clientes);

        const empleados = [
            { nombre: 'Luis', telefono: '555555555', especialidad: 'Corte de cabello' },
            { nombre: 'María', telefono: '666666666', especialidad: 'Manicure' },
        ];
        await Empleado.bulkCreate(empleados);

        console.log("🏝️Datos sembrados correctamente.");
    } catch (error) {
        console.error('Error al sembrar la base de datos:', error);
    }
};

module.exports = seedDatabase;
