export const Sales = async () => {
    const salesConfig = await fetch("http://localhost:8088/purchases?_expand=entree&_expand=vegetable&_expand=sideDish")
    const sales = await salesConfig.json()

let salesDivs = sales.map(
    (purchaseOrder) => {
// Calculate the total price
        const PurchaseOrderPrice = purchaseOrder.entrees.price + purchaseOrder.vegetables.price + purchaseOrder.sideDish.price
//Format the number as currency
        const formattedPrice = PurchaseOrderPrice.toLocaleString(
            "en-US", {
            style: "currency",
            currency: "USD"
        })
//Return the HTML string for the purchase order
        return `
        <li class="CustomerOrder">
            Receipt #${purchaseOrder.id} = ${formattedPrice}
        </li>`
        }
    )

    return salesDivs.join("")
}
