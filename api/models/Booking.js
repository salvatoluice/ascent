const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    car: {type:mongoose.Schema.Types.ObjectId, required:true, ref:'Car'},
    user: {type:mongoose.Schema.Types.ObjectId, requierd:true},
    checkin: {type:Date, required:true},
    checkout: {type:Date, required:true},
    name: {type:String, required:true},
    number: {type:Number, required:true},
    email: {type:String, required:true},
    price: Number,
});

const BookingModel = mongoose.model('Booking', bookingSchema)

module.exports = BookingModel;