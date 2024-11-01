const servicioService = require("../services/servicioService");

const getAllServicios = async (req, res) => {
  const response = await servicioService.getAllServicios();
  res.send({status : 200, data: response});
};

const getServicioById = (req, res) => {
  const response = servicioService.getServicioById();
  res.send(`getAppoitmentById ${req.params.appointmentId}`);
};

const createServicio = (req, res) => {
    const {body} = req;

    if (!body.name ||!body.mode ||!body.equipment ||!body.exercise ||!body.trainerTips) {
      return res.status(400).send({ error: "Campos no corresponden" });
    }

    const newAppoitment = {
        name: body.name,
        mode: body.mode,
        equipment: body.equipment,
        exercise: body.exercise,
        trainerTips: body.trainerTips,
      };
  

  const response = servicioService.createServicio(newAppoitment);
  
  res.status(201).send({status : 200, data: response});
};

const updateServicio = (req, res) => {
  const response = servicioService.updateServicio();
  res.send(`updateAppoitment`);
};

const deleteServicio = (req, res) => {
  const response = servicioService.deleteServicio();
  res.send(`deleteAppoitment`);
};

module.exports = {
  getAllServicios,
  getServicioById,
  createServicio,
  updateServicio,
  deleteServicio,
};
