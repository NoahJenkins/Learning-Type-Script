const menu = [
    {name: "Cheese", price: 8}, 
    {name: "Pepperoni", price: 10},
    {name: "Veggie", price: 8},
    {name: "Pineapple", price: 10}
]

const cashInRegister = 100
const nextOrderId = 1
const orderQue = []

function addNewPizza(pizzaObj) {
    menu.push(pizzaObj)
}

function placeOrder(pizzaName) {
    const selectedPizza = menu.find(pizzaObj => pizzaObj.name === pizzaName)
    cashInRegister += selectedPizza.price
    const newOrder = { id: nextOrderId++, pizza: selectedPizza, status: "ordred"}
    orderQue.push(newOrder)
    return newOrder
}

function completeOrder(orderId) {
    const order = menu.find(orderQue => orderQue.id === orderId)
    order.status = "completed"
    return order

}

addNewPizza({ name: "Veggie", cost: menu.Veggie.price})
addNewPizza({ name: "Cheese", cost: 8})

placeOrder("Veggie")
completeOrder("1")

console.log("Menu")
console.log("Cash in register", cashInRegister
)
console.log("Order queue:", orderQue)
