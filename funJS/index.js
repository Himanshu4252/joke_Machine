let jokeSetup = document.getElementById("jokeSetup");
let jokeDelivery = document.getElementById("jokeDelivery");
const btn = document.getElementById("getBtn");
const API = "https://v2.jokeapi.dev/joke/Any";
const getJoke = async() =>{
try {
    const response = await fetch(API);
    const fetchedjoke = await response.json();
    if(fetchedjoke.type == "twopart"){
    jokeSetup.innerHTML = fetchedjoke.setup;
    jokeDelivery.innerHTML = fetchedjoke.delivery;
    }
    else{
        jokeSetup.innerHTML = fetchedjoke.joke;
        jokeDelivery.innerHTML = "";
    }
    
} catch (error) {
    console.log(error);
    jokeSetup.innerHTML = "Hit the button again..";

}
}

btn.addEventListener("click", getJoke);