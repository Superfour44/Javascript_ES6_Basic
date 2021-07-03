// property shorthand
//old format

let name = "four"
let last = "super"

let user = {
    name : name,
    last : last
}

function user1(name,last,age){
    return {
        name:name,
        last:last,
        age:age
    }
}
// console.log(user)

//new format

let usernew = {
    name , last //property name = parameter name
}


function user2(name,last,age){
    return {
        name,
        last,
        age
    }
}


console.log(user2("suepr","four",25))
// --------------------------------------------------------------------------------