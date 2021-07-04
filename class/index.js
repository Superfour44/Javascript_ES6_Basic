// class
// old format
//--object literal


function User(name,age){     //--class 
    this.name = name
    this.age = age
}

User.prototype.Sayhi= function(){ //--method of class user
    console.log("hello = "+this.name + " Age = "+this.age)
}

var user1 = new User("Four",25); // object of class user

//user1.Sayhi() //object use method Sayhi


// new format
class Admin{
    constructor(name,age){
        console.log("Call Constructure")
    }
    isPermission(){
        console.log("Read Write Data From Database")
    }
}

class UserNewFormat extends Admin{//inheritance of class Admin
    constructor(name,age){
        super() // use constructor of mother class is "Admin"
        this.name = name
        this.age = age
    }
    Sayhi(){
        console.log("hello = "+this.name + " Age = "+this.age)
    }
}

let user2 = new UserNewFormat("SuperFour",29)
user2.Sayhi()
user2.isPermission()