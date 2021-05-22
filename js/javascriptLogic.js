var Piedra = document.getElementById("rock-choose");
var Papel = document.getElementById("paper-choose");
var Tijera = document.getElementById("scissors-choose");
var btn_newplay = document.getElementById("button-click");
var resultCompare = document.getElementById("result");
var btn_choose = document.getElementsByClassName("image-choose");
var Header_information = document.getElementById("selection-information-header");

//Obtiene la imagen de la opcion seleccionada para mostrarla
function selectOption(optionChoose) {
    var imgOption = "img/" + optionChoose + "-icon.svg";
    // console.log(" Img es : " + imgOption);
    document.getElementById("option-choose-play").src = imgOption;
    document.getElementById("option-left-box").classList.add("background-color-new");
    document.getElementById("option-right-box").classList.add("background-color-new");
    btn_newplay.style.display = "block";
}

//Devuelve de forma aleatoria valores establecidos como Piedra,Papel o Tijera
function randomObject() {
    var objects = ['Piedra', 'Papel', 'Tijera'];
    var randomObject = objects[Math.floor(Math.random() * objects.length)];
    // console.log(objects.length);
    document.getElementById("option-choose-computer").src = ("img/" + randomObject + "-icon.svg");
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
            resultCompare.innerHTML = "¡¡Esto es un empate!!";
            break;
        case (compareSelect == "Piedra" && varRandomObject == "Tijera"):
            resultCompare.innerHTML = "¡¡Ganaste!! <br> Con " + compareSelect + " vs " + varRandomObject;
            break;
        case (compareSelect == "Papel" && varRandomObject == "Piedra"):
            resultCompare.innerHTML = "¡¡Ganaste!! <br> Con " + compareSelect + " vs " + varRandomObject;
            break;
        case (compareSelect == "Tijera" && varRandomObject == "Papel"):
            resultCompare.innerHTML = "¡¡Ganaste!! <br> Con " + compareSelect + " vs " + varRandomObject;
            break;
        default:
            resultCompare.innerHTML = "Perdiste :(";
    }

    //Bloque los botonos para escoger, para poder ser activados en un evento mas adelante
    // btn_choose.classList.add("img-disabled");
    Piedra.classList.add("img-disabled");
    Papel.classList.add("img-disabled");
    Tijera.classList.add("img-disabled");
    Piedra.disabled = true;
    Papel.disabled = true;
    Tijera.disabled = true;
    Header_information.classList.add("text-start-after");
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
    var defaultImage = "img/ImageBackground";
    document.getElementById("option-choose-play").src = defaultImage + "-User.svg";
    document.getElementById("option-choose-computer").src = defaultImage + "-Computer.svg";
    btn_newplay.style.display = "none";
    Piedra.classList.remove("img-disabled");
    Papel.classList.remove("img-disabled");
    Tijera.classList.remove("img-disabled");
    Piedra.disabled = false;
    Papel.disabled = false;
    Tijera.disabled = false;
    document.getElementById("option-left-box").classList.remove("background-color-new");
    document.getElementById("option-right-box").classList.remove("background-color-new");
    Header_information.classList.remove("text-start-after");
    resultCompare.innerHTML = "";
});