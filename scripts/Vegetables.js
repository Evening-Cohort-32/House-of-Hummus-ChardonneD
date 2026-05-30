import { setVegetable } from "./TransientState.js"


// The Event Listener
document.addEventListener("change", (event) => {
    // Check if the target is a "vegetable" radio button
    if (event.target.name === "vegetable") {
        // Capture the value, convert to integer, and update state
        const selectedVeggieId = parseInt(event.target.value)
        setVegetable(selectedVeggieId)
    }
})
//HTML generator for the vegetable radio buttons
export const Veggies = async () => {
    //Fetch the vegetables from the API
    const response = await fetch("http://localhost:8088/vegetables")
    const veggies = await response.json()

    //map to generate the radio buttons
const html = veggies.map(veggie => {
    return `
        <div>
            <input type="radio" name="vegetable" value="${veggie.id}" />
            ${veggie.type}
        </div>
    `
}).join("")
return html
}
