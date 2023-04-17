const mongoose = require('mongoose')
const Schema = mongoose.Schema

const reserveSchema = new Schema({
    table: Array,
    status: {
        type: String,
        enum: ['available', 'unavailable', 'booking'],
        default: 'available'
    },
    name : String,
    date : String,
    time : String,
    code : String,
})

const ReserveModel = mongoose.model('reservation', reserveSchema, 'reservation')

module.exports = ReserveModel