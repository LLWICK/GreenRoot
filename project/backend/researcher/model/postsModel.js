const mongoose = require('mongoose')

const Schema = mongoose.Schema //This creates a shortcut to use the Schema class from Mongoose

const postsSchema = new Schema ({


    title: {
        type: String,
        required: true
    },
    binominalName: {
        type: String
    },
    description: {
        type: String,
        required: true
    },
    sunRequirement: {
        type: String,
        required: true
    },
    growingDays: {
        type: String
    },
    sowingMethod: {
        type: String
    },
    spread: {
        type: String
    },
    rowSpacing: {
        type: String
    },
    height: {
        type: String
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

module.exports = mongoose.model('How_To_Grow', postsSchema)