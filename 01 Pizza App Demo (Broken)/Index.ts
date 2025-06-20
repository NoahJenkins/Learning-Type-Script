import * as fs from 'fs';

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
        console.error(`${pizzaName} does not exist in the menu`) // Fixed typo: "menue" -> "menu"
        return
    }
    cashInRegister += selectedPizza.price
    const newOrder: Order = { id: nextOrderId++, pizza: selectedPizza, status: "ordered"} // Fixed typo: "ordred" -> "ordered"
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

// BASIC TEST OUTPUT - to verify console is working
console.log("STARTING PIZZA APP");

// Minimal test to verify console output
console.log("[TEST] If you see this, console output is working!");

// Place some orders before trying to complete them
const order1 = placeOrder("Cheese");
console.log("Order 1 created:", order1);  // Debug log

const order2 = placeOrder("Pepperoni");
console.log("Order 2 created:", order2);  // Debug log

// Now complete orders
const completedOrder = completeOrder(1);
console.log("Completed order result:", completedOrder);  // Debug log

// Enhanced logging
console.log("\n----- PIZZA APP STATUS -----");
console.log("\nMENU ITEMS:");
menu.forEach(pizza => console.log(`- ${pizza.name}: $${pizza.price}`));

console.log("\nCASH IN REGISTER: $" + cashInRegister);

console.log("\nORDER QUEUE:");
if (orderQue.length === 0) {
  console.log("No orders in queue");
} else {
  orderQue.forEach(order => {
    console.log(`Order #${order.id}: ${order.pizza.name} - Status: ${order.status}`);
  });
}

console.log("\nCOMPLETED ORDER DETAILS:");
console.log(completedOrder || "No order was completed");

const outputLog = `
STARTING PIZZA APP
Order 1 created: ${JSON.stringify(order1)}
Order 2 created: ${JSON.stringify(order2)}
Completed order result: ${JSON.stringify(completedOrder)}

----- PIZZA APP STATUS -----

MENU ITEMS:
${menu.map(pizza => `- ${pizza.name}: $${pizza.price}`).join('\n')}

CASH IN REGISTER: $${cashInRegister}

ORDER QUEUE:
${orderQue.length === 0 ? 'No orders in queue' : 
  orderQue.map(order => `Order #${order.id}: ${order.pizza.name} - Status: ${order.status}`).join('\n')}

COMPLETED ORDER DETAILS:
${JSON.stringify(completedOrder) || "No order was completed"}
`;

// Write the output to a file
try {
  fs.writeFileSync('pizza-app-output.txt', outputLog);
  console.log("Output written to pizza-app-output.txt");
} catch (err) {
  console.error("Failed to write output file:", err);
}

console.log("Script completed. If you see this, everything ran to the end.");
process.exit(0);
