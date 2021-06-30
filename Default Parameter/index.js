// default parameter
// city is defualt parameter
const addUser=(name,last,city="Kanchanaburi")=>{
    return name + last +" City = "+city
}

console.log(addUser("Super","Four","Bankok"));
console.log(addUser("Jojo","kik"));