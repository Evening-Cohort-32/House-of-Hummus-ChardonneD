import { setSideDish } from "./TransientState.js"


// The Event Listener
document.addEventListener("change", (event) => {
    // Check if the target is a "sideDish" radio button
    if (event.target.name === "sideDish") {
        // Capture the value, convert to integer, and update state
        const selectedSideDishId = parseInt(event.target.value)
        setSideDish(selectedSideDishId)
    }
})
//HTML generator for the side dish radio buttons
export const SideDishes = async () => {
    //Fetch the side dishes from the API
    const response = await fetch("http://localhost:8088/sideDishes")
    const sideDishes = await response.json()

    //map to generate the radio buttons
const html = sideDishes.map(sideDish => {
    return `
        <div>
            <input type="radio" name="sideDish" value="${sideDish.id}" />
            ${sideDish.title}
        </div>
    `
}).join("")
return html
}