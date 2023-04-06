const mongoose = require('mongoose');

const mechanicSchema = new mongoose.Schema({
    name: String,
    location: String,
    contaact: String,
    intro: String,
    number: Number,
    availability: String,
    experience: Number,
});

const MechanicSchema = mongoose.model('Mechanic', mechanicSchema)

module.exports = MechanicSchema;