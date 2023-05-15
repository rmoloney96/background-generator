var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.getElementById("random");
color1.value="#ff0000";
color2.value="#ffff00";
setGradient();

function setGradient(){
    console.log(color1.value);
    body.style.background = 
    "linear-gradient(to right, " 
    + color1.value 
    + ", " 
    + color2.value 
    + ")";

    css.textContent = body.style.background + ";";
}

function createRandom() {
    var hex = "#" + Math.floor(Math.random() * 16777216).toString(16);
    return hex;
}
  
function setRandom() {
    var random1 = createRandom();
    var random2 = createRandom();
    body.style.background = "linear-gradient(to right, " + random1 + ", " + random2 + ")";
    css.textContent = body.style.background;
    color1.setAttribute("value", random1);
    color2.setAttribute("value", random2);
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

random.addEventListener("click", setRandom);