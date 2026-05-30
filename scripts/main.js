import { FoodTruck } from "./FoodTruck.js"
import { placeOrder } from "./TransientState.js"

const mainContainer = document.querySelector("#container")

// Event Listener: Purchase Button
document.addEventListener("click", (event) => {
    if (event.target.id === "purchase") {
        placeOrder()
    }
})

//Event Listener: Order Placed
document.addEventListener("orderPlaced", () => {
    renderAllHTML()
})

const renderAllHTML = async () => {
    mainContainer.innerHTML = `
        <img id="logo" class="logo" src="./images/hummus.png" alt="House of Hummus logo">
        <h1>Laura Kathryns's House of Hummus</h1>
        ${await FoodTruck()}
    `
}

renderAllHTML()
