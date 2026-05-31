import { Sales } from "./Sales.js"
import { Entrees } from "./Entrees.js"
import { Veggies } from "./Vegetables.js"
import { SideDishes } from "./SideDishes.js"
// The FoodTruck function that generates the HTML for the menu and sales
export const FoodTruck = async () => {
    const salesHTML = await Sales()
    const entreesHTML = await Entrees()
    const veggiesHTML = await Veggies()
    const sideDishesHTML = await SideDishes()
// Complete HTML structure for the menu and sales
    return `
        <article class="menuOptions choices">
            <section class="choices__base options">
                <h2>Entrees</h2>
                ${entreesHTML}
            </section>
            <section class="choices__veggies options">
                <h2>Vegetables</h2>
                ${veggiesHTML}
            </section>
            <section class="choices__sides options">
                <h2>Side Dishes</h2>
                ${sideDishesHTML}
            </section>
        </article>
        <article>
            <button id="purchase">Purchase Combo</button>
        </article>

        <article class="customerOrders">
            <h2>Monthly Sales</h2>
            ${salesHTML}
        </article>

       
    `
}
