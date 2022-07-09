// const restaurant = require("../model/Restaurant")
const Restaurant = require("../models/Restaurant")

module.exports = async function createRestaurant(name, location, budget) {
    try {
        // step1: check name is not repeated
        const existingRestaurant = await Restaurant.findOne({name:name})
        if(existingRestaurant) throw new Error(`A restaurant with the name ${name} already exists.`)
        // step2: assuming all is good, create
        const newRestaurant = new Restaurant ({
            name,
            location,
            cost: budget
        })
        await newRestaurant.save()

        return {
            restaurantId: newRestaurant._id
        }
    } catch (err) {
        throw err
    }
} 