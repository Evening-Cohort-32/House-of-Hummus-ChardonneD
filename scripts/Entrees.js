import { setEntree } from "./TransientState.js"

// Entree Event Listener
document.addEventListener("change", (event) => {
    // Check if the target is an "entree" radio button
    if (event.target.name === "entree") {
        // Capture the value, convert to integer, and update state
        const selectedEntreeId = parseInt(event.target.value)
        setEntree(selectedEntreeId)
    }
})
//HTML generator for the entree radio buttons
export const Entrees = async () => {
    //Fetch the entrees from the API
    const response = await fetch("http://localhost:8088/entrees")
    const entrees = await response.json()


    //map to generate the radio buttons
    const html = entrees.map(entree => {
        return `
        <div>
            <input type="radio" name="entree" value="${entree.id}"/>
            ${entree.name}
        </div>
    `
}).join("")
return html
}