const mongoose = require("mongoose")
const StarSchema = mongoose.Schema({
    color: {
        type: String,
        minLength: 50
    },
    light: {
        type: String,
        minLength: 20
    },
    temperature: Number
})

module.exports = mongoose.model("Star", StarSchema)