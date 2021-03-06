import { restaurantsData } from './apiData'
import { RestaurantPage } from './RestaurantPage'
import { db } from './dbFirebase'

let card = [];
export const getDataCard = () => {
        let cards = document.querySelectorAll('.cards_wrapper > [data-id]')
        for (let i = 0; i < cards.length; i += 1) {

            cards[i].addEventListener('click', (e) => {
                card = []
                let dataIdCard = cards[i].getAttribute('data-id')
                if (cards[i].children[0].children[1].children[0].innerHTML === restaurantsData[i].name) {
                    console.log(restaurantsData[i].name);

                    if (card.length === 0) {
                        card.push({
                            id: restaurantsData[i].id,
                            name: restaurantsData[i].name,
                            categories: restaurantsData[i].categories,
                            image_url: restaurantsData[i].image_url,
                            rating: restaurantsData[i].rating,
                            reviews: [],
                            review_count: 0,
                            price: restaurantsData[i].price,
                            display_phone: restaurantsData[i].display_phone,
                            phone: restaurantsData[i].phone,
                            locationAddress: restaurantsData[i].locationAddress,
                            city: restaurantsData[i].city,
                            url: restaurantsData[i].url,
                            categories: restaurantsData[i].categories,
                            coordinatesLatitude: restaurantsData[i].coordinatesLatitude,
                            coordinatesLongitude: restaurantsData[i].coordinatesLongitude
                        })
                        localStorage.setItem("card", JSON.stringify(card));
                    }
                } else {
                    card = []
                    localStorage.setItem("card", JSON.stringify(card));
                }
            })
        }
    }
    /// render restaurant page
let dataRestaurant = JSON.parse(localStorage.getItem("card"));

export const renderPageRestaurant = () => {
    let pageRestaurant = getWrapperPageRestaurant();
    if (pageRestaurant) {
        generatePage(dataRestaurant).forEach(el => {
            pageRestaurant.append(el.generateRestaurantsPage())
        })
    }
}

const getWrapperPageRestaurant = () => {
    const restaurantContainer = document.querySelector('.main__restaurant_page')
    if (restaurantContainer) {
        restaurantContainer.innerHTML = ''
        return restaurantContainer
    }
}

const generatePage = (dataRestaurant) => {
    let array = []
    dataRestaurant.forEach(element => {
        array.push(new RestaurantPage(element))
    });
    return array
}