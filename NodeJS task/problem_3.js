// Shopping Portal Cart Value Evaluation

/* Input */

const shoppingCart = [
    { name: "Apple", price: 10, quantity: 4 },
    { name: "Banana", price: 5, quantity: 5 },
    { name: "Orange", price: 15, quantity: 3 }
];

/* Input */


/* Logic Implementation Function */
function calculateTotal(cart, val) {
    console.log(val)
    let total = 0
    
    /* Write your logic here --- Start */
    for(let i=0;i<cart.length;i++){
    total += cart[i].price*cart[i].quantity;
     
    }
    return total;

    /* Write your logic here --- End */

     
}
/* Logic Implementation Function */


/* Function Call */
const totalCost = calculateTotal(shoppingCart, "test");
/* Function Call */

/* Output */
console.log('Total cost:',' Rs.'+ totalCost); 
/* Output */

/* Expected Output */
//Total cost: Rs.110
/* Expected Output */
