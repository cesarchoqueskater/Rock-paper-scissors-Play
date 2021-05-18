var Piedra = document.getElementById("rock-choose");
var Papel = document.getElementById("paper-choose");
var Tijera = document.getElementById("scissors-choose");
var btn_newplay = document.getElementById("button-click");
var resultCompare = document.getElementById("result");
var btn_choose = document.getElementById("selection");
var Header_information = document.getElementById("selection-information-header");

//Obtiene la imagen de la opcion seleccionada para mostrarla
function selectOption(optionChoose) {
    var imgOption = "img/" + optionChoose + ".png";
    // console.log(" Img es : " + imgOption);
    document.getElementById("option-choose-play").src = imgOption;
    btn_newplay.style.display = "block";
}

//Devuelve de forma aleatoria  
function randomObject() {
    var objects = ['Piedra', 'Papel', 'Tijera'];
    var randomObject = objects[Math.floor(Math.random() * objects.length)];
    // console.log(objects.length);
    document.getElementById("option-choose-computer").src = ("img/" + randomObject + ".png");
    // console.log(randomObject);
    return randomObject;
}

//Compara el valor obtenido por el jugador y el aleatorio
function compareFunction(compareSelect) {
    varRandomObject = randomObject();
    // console.log("Variable 1 " + compareSelect);
    // console.log("Variable 2 " + varRandomObject);
    switch (compareSelect != "") {
        case (compareSelect == varRandomObject):
            resultCompare.innerHTML = "Esto es un empate";
            break;
        case (compareSelect == "Piedra" && varRandomObject == "Tijera"):
            resultCompare.innerHTML = "¡¡Ganaste!! con " + compareSelect + " vs " + varRandomObject;
            break;
        case (compareSelect == "Papel" && varRandomObject == "Piedra"):
            resultCompare.innerHTML = "¡¡Ganaste!! con " + compareSelect + " vs " + varRandomObject;
            break;
        case (compareSelect == "Tijera" && varRandomObject == "Papel"):
            resultCompare.innerHTML = "¡¡Ganaste!! con " + compareSelect + " vs " + varRandomObject;
            break;
        default:
            resultCompare.innerHTML = "Perdiste :(";
    }

    //Bloque los botonos para escoger, para poder ser activados en un evento mas adelante
    btn_choose.classList.add("img-disabled");
    Piedra.disabled = true;
    Papel.disabled = true;
    Tijera.disabled = true;
    Header_information.style.color = "grey";
}

Piedra.addEventListener("click", function() {
    selectOption('Piedra');
    compareFunction('Piedra');
});
Papel.addEventListener("click", function() {
    selectOption('Papel');
    compareFunction('Papel');
});
Tijera.addEventListener("click", function() {
    selectOption('Tijera');
    compareFunction('Tijera');
});

//Boton para permitir volver a jugar
btn_newplay.addEventListener("click", function() {
    var defaultImage = "img/ImageBackground.png";
    console.log("vae");
    document.getElementById("option-choose-play").src = defaultImage;
    document.getElementById("option-choose-computer").src = defaultImage;
    btn_newplay.style.display = "none";
    btn_choose.classList.remove("img-disabled");
    Piedra.disabled = false;
    Papel.disabled = false;
    Tijera.disabled = false;
    Header_information.style.color = "black";
    resultCompare.innerHTML = "";
});