// computed  property name

let ProductName = "pizza"

let menu={
    [ProductName]:ProductName+" seafood" , [ProductName+"mix"]:"shrimp"
    
}
let {pizza,pizzamix} = menu // {nameproperties1,nameproperties2}
console.log(pizza)
console.log(pizzamix)