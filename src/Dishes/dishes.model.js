const mongoose=require("mongoose");
const disheSchema = require("./dishes.schema");

exports.Dishes=mongoose.model('dishe',disheSchema)
