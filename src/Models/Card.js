const mongoose = require('mongoose')

const CardSchema = mongoose.Schema({
    cardID:{
        type: 'string',
        required: true
    },
    owner:{
        type: 'string',
        required: true
    },
    permission: {
        type: 'boolean',
        default: false
    }
})

module.exports = mongoose.model('Card', CardSchema)