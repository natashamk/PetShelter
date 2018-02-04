var mongoose = require('mongoose');
var PetSchema = new mongoose.Schema({
    name: {
        type: String, required: [true, "Pet must have a name "],
        minlength: [3, "Pet name must be atleast 3 characters"]
    },
    type: {
        type: String, required: [true, "Pet type is required "],
        minlength: [3, "Pet type must be atleast 3 characters"]
    },   
    description: {
        type: String, required: [true, "Pet description is required "],
        minlength: [3, "Pet description must be atleast 3 characters"]
    },   
    skill1: String, 
    skill2: String, 
    skill3: String},
   { timestamps: true });
   
var Pet = mongoose.model('Pet', PetSchema)