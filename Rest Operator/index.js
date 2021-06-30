// Rest Operator
// rest operator like array
// ex ... city is rest operator
const addUser=(name,last,... city)=>{
    return name +" "+ last + " " + city
} 
// console.log(addUser("Super","Four","Bankok"));
// console.log(addUser("Jojo","kik","Ratchaburi","Nakhonprathom","Krabi"));



const addMesage=(first,... message)=>{
    return message.map(m=>first+message)
}
const addNumber=(... number)=>{
    // sum number in rest operator use reduce function
    return number.reduce((first,current)=>{
        return first+current
    })
}
console.log(addMesage("Hello","World","JS6"))

console.log(addNumber(1,2,3,4,5));