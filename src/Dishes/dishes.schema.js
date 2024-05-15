const { Schema } = require("mongoose");

const disheSchema = new Schema({
    categories: {
        type: String, required: true, enum: [
            "Appetizers",
            "Bao",
            "Beef",
            'Chicken',
            'Deinks',
            'Desserts',
            'Noodles',
            'Ramen',
            'Rice',
            'Salads',
            'Shrimp',
            'Soup,']
    },
    disheName: { type: String, required: true },
    ingredients: { type: String, required: true },
    price: { type: Number, required: true },
    dishImg: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

module.exports = disheSchema;