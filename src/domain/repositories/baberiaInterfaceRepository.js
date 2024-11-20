const barberiaRepository = require("../../infraestructure/repository/barberiaRepository");

const  getAllBarberia = () =>{
return barberiaRepository.getAllbarberias();
}

const getBarberiaById = (barberiaId) =>{    
   return barberiaRepository.obtenerServiciosBarberia(barberiaId);
 
}

module.exports = {
    getAllBarberia,
    getBarberiaById
}