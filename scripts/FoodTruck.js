import { Sales } from "./Sales.js"
import { Entrees } from "./Entrees.js"
import { Veggies } from "./Vegetables.js"
import { SideDishes } from "./SideDishes.js"

export const FoodTruck = async () => {
    const salesHTML = await Sales()
    const entreesHTML = await Entrees()
    const veggiesHTML = await Veggies()
    const sideDishesHTML = await SideDishes()

    return `
        <article class="menuOptions">
            <section class="menu">
            <h2>Entrees</h2>
            ${entreesHTML}
            <h2>Vegetables</h2>
            ${veggiesHTML}
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
