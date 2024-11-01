const Appoitment = require('../database/Appoitment');
const Servicio = require('../models/Servicio');


const getAllServicios = async () =>{
    const servicios = await Servicio.findAll();
    const response = 'hola desde el service';
    return  servicios;
}
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
    getAllServicios,
    getServicioById,
    createServicio,
    updateServicio,
    deleteServicio,
 };
