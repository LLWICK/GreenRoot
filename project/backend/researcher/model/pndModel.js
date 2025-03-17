const mongoose = require('mongoose')

const Schema = mongoose.Schema

const pndSchema = new Schema({
    
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    location: {
       type: String,
       required: true
    },
    file: {
        type: String
    }
    // },
    // user_id: {
    //     type: String,
    //     required: true
    // }
}, {timestamps: true})

module.exports = mongoose.model('Pest_and_Disease', pndSchema)