const transientState = {
    entreeId: 0,
    vegetableId: 0,
    sideDishId: 0
}
// Transient State Setters
    export const setEntree = (id) => {
        transientState.entreeId = id
}
    export const setVegetable = (id) => {
        transientState.vegetableId = id
}
    export const setSideDish = (id) => {
        transientState.sideDishId = id
}
    export const placeOrder = async () => {
        const postOptions = {
            method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
            body: JSON.stringify(transientState)
    }

// Send the transient state to API
const response = await fetch("http://localhost:8088/purchases", postOptions)
    
const  customEvent = new CustomEvent("orderPlaced")
    document.dispatchEvent(customEvent)    
}