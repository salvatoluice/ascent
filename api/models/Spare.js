const mongoose = require('mongoose');

const spareSchema = new mongoose.Schema({
    title: String,
    type: String,
    category: String,
    manufacturer: String,
    description: String,
    supplier: String,
    feature: String,
    price: Number,
    image: String,
});

const SpareSchema = mongoose.model('Spare', spareSchema);

module.exports = SpareSchema;