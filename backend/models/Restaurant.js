'use strict';
let mongoose = require('mongoose');
let Schema = mongoose.Schema;

const restaurantSchema = new Schema ({
    
        name: String,
        location: String,
        cost: {
            type: String,
            enum: ["$", "$$", "$$$"],
            default: "$$"
        }
    
})

module.exports = mongoose.model('Restaurant', restaurantSchema)