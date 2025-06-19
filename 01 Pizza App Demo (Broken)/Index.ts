let menu = [
    {name: "Cheese", price: 8}, 
    {name: "Pepperoni", price: 10},
    {name: "Veggie", price: 8},
    {name: "Pineapple", price: 10}
]

let cashInRegister: number = 100
let nextOrderId: number = 1
let orderQue = []

function addNewPizza(pizzaObj) {
    menu.push(pizzaObj)
}

function placeOrder(pizzaName) {
    let selectedPizza = menu.find(pizzaObj => pizzaObj.name === pizzaName)
    if (!selectedPizza) {
        console.error(`${pizzaName} does not exist in the menue`)
        return
    }
    cashInRegister += selectedPizza.price
    const newOrder = { id: nextOrderId++, pizza: selectedPizza, status: "ordred"}
    orderQue.push(newOrder)
    return newOrder
}

function completeOrder(orderId) {
    let order = menu.find(orderQue => orderQue.id === orderId)
    order.status = "completed"
    return order

}

addNewPizza({ name: "Veggie", cost: 8})
addNewPizza({ name: "Cheese", cost: 8})

placeOrder("Veggie")
completeOrder("1")

console.log("Menu")
console.log("Cash in register", cashInRegister
)
console.log("Order queue:", orderQue)
