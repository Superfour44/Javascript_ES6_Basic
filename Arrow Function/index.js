//normal function
// function plusValue(a,b){
//     return a+b
// }



//arrow function
//not symbol {} it only 1 statement
const plusArrow=(a,b)=>a+b
// let result = plusArrow(200,50)

const student =name=>({name:name,age:10})
let result = student("Four")


console.log(result);