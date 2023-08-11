//JS-01



//-----------------------------------------------------------------
//Data types
//STRING
let string = "Hello World"; 

//INTERGER
let number = 8080; 

//FLOATING POOINT NUMBER
let float = 3.14; 

//BOOLEAN TYPE
let bool = true; 

//ARRAY DECLARATION
let array = ['Hello', 'there', ',', 'How r u doing?']; 

//OBJECT
let objectDesc = {
    "Name": "Kartik",
    "Age": 22,
    "Date": "12-11-2000"
}; 

//OBJECT-2
let objectGroup = {
    "Trucks": ["Volvo", "Scania", "Mahindra"],
    "Hello": ["Hello", "Hola", "Ahlan"],
    "Languages": ["English", "Spanish", "Arabic"]
}; 





//-----------------------------------------------------------------
//Loops: while and for loop
//Displaying number from 1 to 10
let counter = 1;
while(counter <= 10){
    console.log(counter);
    counter++;
}

//Calculating sum from 1 to 100
let sum = 0;
for(let i = 1; i <= 100; i ++){
    sum += i;
}
console.log(sum);





//-----------------------------------------------------------------
//The 'switch' statement
let key = Math.floor(Math.random()*7);

switch(key){
    case 1: console.log("Sunday");
    break;

    case 2: console.log("Monday");
    break;

    case 3: console.log("Tuesday");
    break;

    case 4: console.log("Wednesday");
    break;

    case 5: console.log("Thursday");
    break;

    case 6: console.log("Friday");
    break;

    case 7: console.log("Saturday");
    break;

    default: console.log("Input cannot be more than 7!");
}





//-----------------------------------------------------------------
//Program flow: Functions
const calculateArea = (length, width) => {
    return length * width;
}

console.log("Area of rectangle of given values is ", calculateArea(Math.floor(Math.random()*100),(Math.random())).toFixed(2));





//-----------------------------------------------------------------
//Program flow: Conditional statements
let test1 = null;

for(let it = 0; it < 5; it ++){
    test1 = Math.floor(Math.random()*100)-50;

    if(test1 < 0) console.log("Negative",test1);
    if(test1 == 0) console.log("Zero", test1);
    if(test1 > 0) console.log("Positive", test1);
}





//-----------------------------------------------------------------
//Program flows: Loops
//Displaying even numbers
for(let j = 1; j <= 20; j ++){
    //Checking if a number is even or not
     if(j%2 == 0){
        console.log(j);
     }
}

//Displaying factorial of the given number
let input = Math.floor(Math.random() * 10) + 10;

if(input == 0 || input == 1) console.log(1);
else{
    let result = 1;
    while(input != 1){
        result *= input;
        input--;
    }
    console.log(result);
}
