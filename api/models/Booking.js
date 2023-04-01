const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    car: {type:mongoose.Schema.Types.ObjectId, required:true},
    checkin: {type:Date, required:true},
    checkout: {type:date, required:true},
    name: {type:String, required:true},
    number: {type:Number, required:true},
    email: {type:String, required:true},
    price: Number,
});

const BookingModel = mongoose.model('Booking', bookingSchema)

module.exports = BookingModel;