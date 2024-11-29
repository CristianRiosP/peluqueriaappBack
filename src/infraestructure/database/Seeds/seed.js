// seed.js
const {sequelize} = require('../config'); // Ajusta la ruta según tu estructura
const Servicio = require('../../models/Servicio');
const Cliente = require('../../models/Cliente');
const Barbero = require('../../models/Barbero');
const Cita = require('../../models/Cita');
const StarBarberia = require('../../models/StarBarberia');
const Barberia = require('../../models/Barberia');
const BarberiaServicio = require('../../models/BarberiaServicio');

const seedDatabase = async () => {
    try {
         await sequelize.sync({ force: true });
        
        // Datos de ejemplo para Servicios
        const servicios = [
            { nombre: 'Corte de cabello', descripcion: 'Corte de cabello clásico.' },
            { nombre: 'Manicure', descripcion: 'Manicure y pedicure.' },
        ];
        await Servicio.bulkCreate(servicios);

        const clientes = [
            { nombre: 'Juan Pérez', password: '123456789', email: 'jua@example.com' },
            { nombre: 'Ana Gómez', password: '987654321', email: 'ana@example.com' },
            { nombre: 'hernesto Pérez', password: '13456789', email: 'juan@xample.com' },
            { nombre: 'Anastasia Gómez', password: '98654321', email: 'an@example.com' },
        ];
        await Cliente.bulkCreate(clientes);

        const barbero = [
            { nombre: 'Luis', especialidad: 'Corte de cabello' },
            { nombre: 'María', especialidad: 'Manicure' },
        ];
        await Barbero.bulkCreate(barbero);
        
        const barberias = [
            { nombre: 'Luis Cortex', telefono: '555555555',avatar: 'http://192.168.1.17:3001/images/barbero.png', tipo: '1' },
            { nombre: 'rappi Cortes',  telefono: '666666666',avatar: 'http://192.168.1.17:3001/images/peluqueria.png', tipo: '2' },
        ];
        await Barberia.bulkCreate(barberias);

        const barberiasServicios = [
            { precio: 12000, duracion: 45, activo: true,fk_barberia_id:1,fk_servicios_id:1 },
            { precio: 15000, duracion: 60, activo: true,fk_barberia_id:1,fk_servicios_id:2 },
            { precio: 12000, duracion: 45, activo: true,fk_barberia_id:2,fk_servicios_id:1 },
            { precio: 15000, duracion: 60, activo: true,fk_barberia_id:2,fk_servicios_id:2 },
        ];
        await BarberiaServicio.bulkCreate(barberiasServicios);

        const starBarberias = [
            { valoracion: 4,fk_barberia_id:1,fk_cliente_id:1 },
            { valoracion: 3,fk_barberia_id:1,fk_cliente_id:2 },
            { valoracion: 4,fk_barberia_id:2,fk_cliente_id:3 },
            { valoracion: 2,fk_barberia_id:2,fk_cliente_id:4 },
        ];
        await StarBarberia.bulkCreate(starBarberias);

        const citas=[
            {clientes_id:1,barbero:1,servicios_id:1,fecha_cita:"12-05-2024",estado:1, hora_inicio:"12:30", barberias_id:1,},
            {clientes_id:1,barbero:1,servicios_id:2,fecha_cita:"12-05-2024",estado:2, hora_inicio:"13:30", barberias_id:1,},
            {clientes_id:1,barbero:1,servicios_id:1,fecha_cita:"12-05-2024",estado:1, hora_inicio:"14:30", barberias_id:2,},
            {clientes_id:1,barbero:1,servicios_id:2,fecha_cita:"12-05-2024",estado:2, hora_inicio:"9:30", barberias_id:1,},
            {clientes_id:1,barbero:1,servicios_id:1,fecha_cita:"12-05-2024",estado:1, hora_inicio:"11:30", barberias_id:2,},
            {clientes_id:1,barbero:1,servicios_id:2,fecha_cita:"12-05-2024",estado:1, hora_inicio:"17:30", barberias_id:1,},
        ]
        await Cita.bulkCreate(citas);

        console.log("🏝️Datos sembrados correctamente.");
    } catch (error) {
        console.error('Error al sembrar la base de datos:', error);
    }
};

module.exports = seedDatabase;
