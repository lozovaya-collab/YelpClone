//  import restaurants from "./../../dist/data/response.json"
import restaurants from "./../../src/js/data/response.json"
export const restaurantsData = [];
export const arrayNameRestaurantsCity = [];
let arrayRestaurants = [];

const getListRestaurants = () => {

    for (let s = 0; s < restaurants.businesses.length; s += 1) {
        arrayRestaurants.push(restaurants.businesses[s])
    }
    arrayRestaurants.push(restaurants.businesses)

    for (let i = 0; i < arrayRestaurants.length - 1; i += 1) {
        restaurantsData.push({
            id: arrayRestaurants[i].id,
            name: arrayRestaurants[i].name,
            url: arrayRestaurants[i].url,
            categories: arrayRestaurants[i].categories,
            image_url: arrayRestaurants[i].image_url,
            rating: arrayRestaurants[i].rating,
            review_count: arrayRestaurants[i].review_count,
            coordinatesLatitude: arrayRestaurants[i].coordinates.latitude,
            coordinatesLongitude: arrayRestaurants[i].coordinates.longitude,
            price: arrayRestaurants[i].price,
            display_phone: arrayRestaurants[i].display_phone,
            phone: arrayRestaurants[i].phone,
            locationAddress: (arrayRestaurants[i].location.display_address).join(', '),
            city: arrayRestaurants[i].location.city,
            address1: arrayRestaurants[i].location.address1,
        })
    }
    restaurantsData.sort(() => Math.random() - 0.5);

    for (let j = 0; j < restaurantsData.length; j += 1) {

        arrayNameRestaurantsCity.push({
            name: restaurantsData[j].name,
            city: restaurantsData[j].city,
            coordinatesLatitude: restaurantsData[j].coordinatesLatitude,
            coordinatesLongitude: restaurantsData[j].coordinatesLongitude,
        })
    }
}
getListRestaurants()