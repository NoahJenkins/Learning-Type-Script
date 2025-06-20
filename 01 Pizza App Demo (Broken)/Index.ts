type Pizza = {
    name: string,
    price: number
}

type Order = {
    id: number, 
    pizza: Pizza, 
    status: string,
}

let menu = [
    {name: "Cheese", price: 8}, 
    {name: "Pepperoni", price: 10},
    {name: "Veggie", price: 8},
    {name: "Pineapple", price: 10}
]

let cashInRegister: number = 100
let nextOrderId: number = 1
let orderQue: Order[] = []

function addNewPizza(pizzaObj: Pizza) {
    menu.push(pizzaObj)
}

function placeOrder(pizzaName: string) {
    let selectedPizza = menu.find(pizzaObj => pizzaObj.name === pizzaName)
    if (!selectedPizza) {
        console.error(`${pizzaName} does not exist in the menue`)
        return
    }
    cashInRegister += selectedPizza.price
    const newOrder: Order = { id: nextOrderId++, pizza: selectedPizza, status: "ordred"}
    orderQue.push(newOrder)
    return newOrder
}

function completeOrder(orderId: number) {
    let order = orderQue.find(order => order.id === orderId)
    if (order) {
        order.status = "completed"
    }
    return order
}

addNewPizza({ name: "Veggie", price: 8})
addNewPizza({ name: "Cheese", price: 8})

completeOrder(1)
completeOrder(1)

console.log("Menu")
console.log("Cash in register", cashInRegister
)
console.log("Order queue:", orderQue)
