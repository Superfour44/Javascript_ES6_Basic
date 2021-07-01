// Tempalte Literals

// old  format

const name = "Superfour"
const last = "Se"
const city = "Bankok"

const all = "Name = "+name+" last = "+last+" city = "+city

const allnew = "name = "+name+" \
\nLast = "+last+"\
\ncity = "+city

// console.log(all)
// console.log(allnew)

// new format
const allname1=`name = ${name} last = ${last} city = ${city}` //concat string
console.log(allname1)
const allname2=`name = ${name}
last = ${last}
city = ${city}` 
console.log(allname2)


// Destructuring Object

//old format
// var person={
//     name:"Four",
//     skill:"jses6 html css"
// }

// var skill = person.skill
// var namedes = person.name
// console.log(`name = ${namedes} skill = ${skill}`)

// new format
var player={
    namedes:"Four",
    skill:"jses6 html css"
}

let {namedes,skill} = player
console.log(`name = ${namedes} skill = ${skill}`)
