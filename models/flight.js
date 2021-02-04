const mongoose = require('mongoose')


// Schema for DB
const flightSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    desc: {
        type: String
    },
    stops: {
        type: Number,
        required: true
    },
    depLoc: {
        type: String,
        required: true
    },
    arrLoc: {
        type: String,
        required: true
    },
    depTime: {
        type: Date,
        required: true
    },
    edt: {
        type: Date,
    },
    eta: {
        type: Date,
    }
})

module.exports = mongoose.model('Flight', flightSchema)