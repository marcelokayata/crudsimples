const createRestaurant = require('../controllers/createRestaurant')
const Restaurant = require('../models/Restaurant')
const db = require('./db')

beforeAll(async () => await db.connect())
afterEach(async () => await db.clearDatabase())
afterAll(async () => await db.closeDatabase())

describe('Restaurant created when', () => {
    it('First restaurant', async done => {
        const { restaurantId } = await createRestaurant("First", "Sydney", "$")

        // find the restaurant from db
        const restaurant = await Restaurant.findById(restaurantId)

        // Check the name, location ect of the restaurant found

        expect(restaurant.name).toEqual("First")
        expect(restaurant.cost).toEqual("Sydney")
        expect(restaurant.location).toEqual("Sydney")
    })
})