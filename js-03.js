//Part 1: Window
//Fetch URL of current website
function fetchURL() {
    document.getElementById("url").innerHTML = window.location.href;
}
setTimeout(() => {
    document.getElementById("url").innerHTML = "";
}, 5000);

//Open a new window of exactly 500px * 400px size using window.open() function
function openNewWindow() {
    window.open("", "", "width=500px, height=400px");
}




//---------------------------------------------------------------------------
// Part 2: Document
let change = document.getElementById("myDiv");
change.style = "background-color: red; ";

function changeColor() {
    let change = document.getElementById("myDiv");
    change.style = "background-color: blue";
}





//Part 3: Building Interactivity with DOM Manipulation
function Add(){
    let value = prompt("Please add an item");
    let parent = document.getElementById("myList");
    if(value){
        let li = document.createElement('li');
        li.innerText = value;
        parent.appendChild(li);
    }
}

function Delete(){
    let parent = document.getElementById("myList");
    if(parent.firstChild){
        parent.removeChild(parent.children[0]);
    }
    else{
        parent.innerHTML = "No list to delete";
        setTimeout(() => {
            parent.innerHTML = "";
        }, 1000);
    }
}


