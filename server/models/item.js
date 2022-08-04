const mongoose = require("mongoose");


//Schema with item title, price, and description
const ItemSchema = new mongoose.Schema({
    title:{
        type: String,
        required: [true, "{PATH} must be present"],
        minlength: [2, "{PATH} must be 2 chars long"]
    },
    price:{
        type: String,
        required: [true, "{PATH} must be present"],
        minlength: [1, "{PATH} must be 1 chars long"]
    },
    description:{
        type: String,
        required: [true, "{PATH} must be present"],
        minlength: [2, "{PATH} must be 2 chars long"]
    }
}, {timestamps: true})

const Item = mongoose.model("Item", ItemSchema)
module.exports = Item;