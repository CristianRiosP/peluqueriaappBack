const DB =require('./db..json');

const getAllAppointments = () => {
    return DB.workouts;
};

module.exports = {getAllAppointments}