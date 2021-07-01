// Spread Operator
// array 

let fruit = ["mango","watermelon"]
console.log(fruit)
let food=["pizza","burger"] // spread operator
console.log(food)
let allfood = [... food,... fruit]
console.log(allfood)


// object

let product = {name:"durian",price:"200"}
console.log(product)
let newproduct = {... product,category:"fruit"}
console.log(newproduct)
let newprice = {... newproduct,price:500} //update price
console.log(newprice)
