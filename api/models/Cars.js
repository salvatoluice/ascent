const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
    owner: {type:mongoose.Schema.Types.ObjectId, ref:'User'},
    title: String,
    address: String,
    contaact: String,
    photos: [String],
    description: String,
    perks: [String],
    extraInfo: String,
    dayprice: Number,
    weekprice: Number,
    maxPass: Number,
});

const CarModel = mongoose.model('Car', carSchema);

module.exports = CarModel;