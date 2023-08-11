//Data structures: Arrays
function sumArray(arrayOfNumbers){
    let counter = arrayOfNumbers.length;
    let sum = 0;
    while(counter != 0){
        sum += arrayOfNumbers[counter];
        counter--;
    }
}





//----------------------------------------------------------
//Datastructures: Objects
let person = {
    "name" : "John Doe",
    "age" : "30",
    "email" : "john.doe@openenselabs.com"
}

function printPersonDetails(object){
    console.log(
        "\nName: ", person.name, 
        "\nAge: ", person.age, 
        "\nEmail: ", person.email
        );
}





//----------------------------------------------------------
// Functions Are Just Variables
let greeting = (name) => {
    return `Hello ${name}. How r u doing?`;
}




//----------------------------------------------------------
let car = {
    "brand" : "",
    "model" : "",
    "start" : function(){
        return `Brand name is ${this.brand} and Model name is ${this.model}`;
    }
}





//----------------------------------------------------------
//The old "var"
function printNumbers(){
    // var count = 0; //Confusion: Where to declare
    for(var count = 0; count < 5; count ++){
        console.log(count);
    }
    console.log(count);
}

console.log(printNumbers());



//----------------------------------------------------------
// Function binding
let user = {
    "name" : "before binding",
    "sayName" : function(){
        console.log(this.name);
    }
};

let new_user = {
    "name" : "after binding",
} 

let binding_test = user.sayName.bind(new_user);





//----------------------------------------------------------
// Arrow functions, the basics
let double = (number) => {
    return number * 2;
}

console.log(double(5));




