const BarberiaServicio = require('../models/BarberiaServicio');
const Barberia = require('../models/Barberia');
const Servicio = require('../models/Servicio');
const { Sequelize, Op } = require('sequelize');
const StarBarberia = require('../models/StarBarberia');



const getAllbarberias = async () =>{

    try{
        const barberias = await StarBarberia.findAll({
            attributes: [
              'fk_barberia_id',
            [
                Sequelize.fn('ROUND', Sequelize.fn('AVG', Sequelize.col('valoracion')), 1), // Redondear el promedio a 1 decimal
                'star'
              ]
            ],
            group: ['fk_barberia_id'], 
            include: [{
              model: Barberia, 
              attributes: ['id', 'nombre', 'avatar', 'tipo', 'created_at', 'updated_at'], 
            }]
        });    
        return barberias;
    } catch (error) {
        console.error("Error al obtener las barberías:", error);
        return { status: 500, message: 'Error al obtener las barberias' }; 
    }
    
}

const obtenerServiciosBarberia = async (barberiaId) =>{

try {
    const servicios = await BarberiaServicio.findAll({
      where: {
        fk_barberia_id: barberiaId,  // Filtrar por la barbería
      },
      include: [
        {
          model: Barberia,  // Incluir solo el nombre de la barbería
          attributes: ['nombre'],  // Solo el campo nombre
        },
        {
          model: Servicio,  // Incluir solo el nombre del servicio
          attributes: ['nombre'],  // Solo el campo nombre
        }
      ],
      attributes: [
        'id',
        'precio',
        'duracion',
        'activo',
        'created_at',
        'updated_at',
        'fk_barberia_id',
        'fk_servicios_id',
      ],
    });

    

    return servicios;

  } catch (error) {
    console.error("Error al obtener los servicios de la barbería:", error);
    return { status: 500, message: 'Error al obtener los servicios' };
  }
};


const getServicioById = () =>{
    return ;
}
const createServicio = () =>{
    return ;
}
const updateServicio = () =>{
    return ;
}
const deleteServicio = () =>{
    return ;
}

module
.exports ={
    getAllbarberias,
    obtenerServiciosBarberia,
    // createServicio,
    // updateServicio,
    // deleteServicio,
 };




 
    // const barberias = await BarberiaServicio.findAll({
    //     include:[
    //         {
    //             model:Barberia,
    //             as: 'barberia',
    //             attributes:['id','nombre']
    //         },
    //     ],
    //     attributes: [
    //         'fk_barberia_id',  // Necesitamos agrupar por este campo
    //         [Sequelize.fn('MIN', Sequelize.col('id')), 'id'],  // El primer id (el más bajo)
    //         [Sequelize.fn('MIN', Sequelize.col('precio')), 'precio'],  // El precio más bajo
    //         [Sequelize.fn('MIN', Sequelize.col('duracion')), 'duracion'],  // Duración más baja
    //         [Sequelize.fn('MAX', Sequelize.col('activo')), 'activo'],  // Tomamos el valor más alto de 'activo'
    //       ],
    //       group: ['fk_barberia_id'],  // Agrupamos por fk_barberia_id para obtener solo un registro por barbería
    //       order: [['id', 'ASC']],
         
    // });