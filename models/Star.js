const mongoose = require("mongoose") 
const StarSchema = mongoose.Schema({ 
 color: String, 
 light: Number, 
 temperature: Number
}) 
 
module.exports = mongoose.model("Star", StarSchema)