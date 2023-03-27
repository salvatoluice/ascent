const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
    owner: mongoose.Schema.Types.ObjectId,
    title: String,
    address: String,
    photos: [String],
    description: String,
    perks: [String],
    extraInfo: String,
    checkIn: Number,
    checkout: Number,
    maxPass: Number
});

const CarModel = mongoose.model('Car', carSchema);

module.exports = CarModel;