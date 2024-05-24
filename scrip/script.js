console.log("jaja");

let btn1 = document.getElementById("repit");

let boxes = document.querySelectorAll(".cajasCont1");

let trueFalse = true;

//Contenedores a donde van los contadores de las win y empate:
let conteinerWinx = document.querySelector(".numeroWx");
let conteinerWino = document.querySelector(".numeroWo");
let conteinerEmpate = document.querySelector(".numeroEmpates");

if (localStorage.getItem('XWins') == null) {
    localStorage.setItem('XWins', 0);
    localStorage.setItem('OWins', 0);
    localStorage.setItem('Empate', 0); 
}

//Extraigo los numeros del locageStorage:
let x = localStorage.getItem('XWins');
let o = localStorage.getItem('OWins');
let e = localStorage.getItem('Empate');

console.log(x)

//Agrego el numero en el div correspondiente de cada contador.
conteinerWinx.innerHTML = x;
conteinerWino.innerHTML = o;
conteinerEmpate.innerHTML = e;



function handleClick(evento) {

    //currentTarget te manda el elemnto html que a sido clickeado, ejemplo, es lo mismo que si estuviera haciendo getElementById.
    //GetAtribute te devuelve el elemento propio, en este caso el " i ="0" ". 
    
    //Extraigo el ID desde el evento del la funcion, para despues agregarlo en el getElementId, para luego tomarlos como referencia al agregarlo al HTML con el appendChild
    let idString = evento.currentTarget.getAttribute("id");

    let IdDelDom = document.getElementById(idString);

    let fila = evento.currentTarget.getAttribute("i");

    let columna = evento.currentTarget.getAttribute("j");

    let equis = document.createElement("img");

    if (trueFalse == true) {

        if (IdDelDom.innerHTML != "") {

            alert("Este espacio esta jugado");
            
        }else{
            equis.className = "equis";
            equis.src = "/Proyect-3/img/equiisCeleste.svg";
            IdDelDom.appendChild(equis);
            matriz[fila][columna] = "x";
            trueFalse = false;

            equis.offsetHeight;
            equis.classList.add('visible');
        }

    }else{

        if (IdDelDom.innerHTML != "") {
            alert("Este espacio esta jugado!");
            
        }else{
            equis.className = "circulo";
            equis.src = "/Proyect-3/img/crculoAmmarillo-removebg-preview.png";
            IdDelDom.appendChild(equis);
            matriz[fila][columna] = "o";
            trueFalse = true;

            equis.offsetHeight;
            equis.classList.add('visible');
        }
    }

    if (ganador(matriz) == "x") {

        alert("El jugador X for the win");
        capa.style.display = "inline-block";


    }else if((ganador(matriz) =="o")){
        alert("El jugador O for the win");
        capa.style.display = "inline-block";

        
    }else{

        //Verifica si el conetendor esta lleno, y declara el empate:
        let EspacioOcupado = 0;

        for (let i = 0; i < matriz.length; i++) {
            if (matriz[0][i] != "") {
                if(matriz[1][i] != ""){
                    if(matriz[2][i]){
                        ++EspacioOcupado;
                    }else{
                        break;
                    }
                }else{
                    break;
                }
            }else{
                break;
            };

            if (EspacioOcupado == 3) {
            
                alert("EMPATE, vuelva a jugar...");
                capa.style.display = "inline-block";
                localStorage.setItem("Empate",((parseInt(e) + 1)));
                conteinerEmpate.innerHTML = e;
                break;

            };
        };
    };
};

//-----------------------------------------------------------------------------------------------------

for (let index = 0; index < boxes.length; index++) {

    boxes[index].addEventListener("click", handleClick);

};

//------------------------------------------------------------------------------------------------------
let capa = document.querySelector(".capa");

let sonido1 = new Audio();
let sonido2 = new Audio();
let sonido3 = new Audio();
let sonido4 = new Audio();
let sonido5 = new Audio();
let sonido6 = new Audio();
let sonido7 = new Audio();
let sonido8 = new Audio();
let sonido9 = new Audio();

sonido1.src = "/Proyect-3/sonidos/interface-124464.mp3";
sonido2.src = "/Proyect-3/sonidos/interface-124464.mp3";
sonido3.src = "/Proyect-3/sonidos/interface-124464.mp3";
sonido4.src = "/Proyect-3/sonidos/interface-124464.mp3";
sonido5.src = "/Proyect-3/sonidos/interface-124464.mp3";
sonido6.src = "/Proyect-3/sonidos/interface-124464.mp3";
sonido7.src = "/Proyect-3/sonidos/interface-124464.mp3";
sonido8.src = "/Proyect-3/sonidos/interface-124464.mp3";
sonido9.src = "/Proyect-3/sonidos/interface-124464.mp3";

let matriz = [
    ["","",""],
    ["","",""],
    ["","",""]
];

//------------------------------------------------------------------FUNCION GANADORA-------------------------------------------------------------------
function ganador(matriz) {

    //contadores de X de las 3 filas
    let contXF1 = 0;
    let contXF2 = 0;
    let contXF3 = 0;
    //contadores de X de las 3 columnas
    let contXC1 = 0;
    let contXC2 = 0;
    let contXC3 = 0;
    //contadores de O en las 3 filas
    let contOF1 = 0;
    let contOF2 = 0;
    let contOF3 = 0;
    //contadores de O en las3 columnas
    let contOC1 = 0;
    let contOC2 = 0;
    let contOC3 = 0;

    //Contador de 0 y X en la diagonal superior izquierda y inferior derecha.
    let contODiagonal1 = 0;
    let contXDiagonal1 = 0;

    //Contador de 0 y X en la diagonal superior derecha y inferior izquierda.
    let contODiagonal2 = 0;
    let contXDiagonal2 = 0;

    //Validacion para ganadores:

    for (let i = 0; i < matriz.length; i++) {
        
        for (let j = 0; j < matriz.length; j++) {

            if (matriz[i][j] == "x") {
                if (i == 0) {
                    contXF1++;
                }else if (i == 1) {
                    contXF2++;
                }else if (i == 2) {
                    contXF3++;
                };
            };

            if (matriz[i][j] == "o"){
                if (i == 0) {
                    contOF1++;
                }else if (i == 1) {
                    contOF2++;
                }else if (i == 2) {
                    contOF3++;
                }
            };

            if (matriz[j][i] == "x"){
                if (i == 0) {
                    contXC1++;
                }else if (i == 1) {
                    contXC2++;
                }else if (i == 2) {
                    contXC3++;
                }
            };

            if(matriz[j][i] == "o"){
                if (i == 0) {
                    contOC1++;
                }else if (i == 1) {
                    contOC2++;
                }else if (i == 2) {
                    contOC3++;
                };
            };
        };

        //diagonal 1 verificador
        if (matriz[i][i] == "x") {
            contXDiagonal1++;
            
        }else if(matriz[i][i] == "o"){
            contODiagonal1++;
        };
    };


    //DIAGONAL 2--------------------for decrementa y el otro aumenta, segun el rango de la matriz---------------------------------------------------------------
    //El error es que al iterar en la segunda columna, la fila se queda en 2 "matriz[2][1]" en la segunda vuelva del for interior
    let decrementacion = 2;
    for (let j = 0; j < matriz.length; j++) {
        if (matriz[decrementacion][j] == "x") {
            
            contXDiagonal2++;
        }else if(matriz[decrementacion][j] == "o" ) {
            
            contODiagonal2++;
        };
        --decrementacion;
    };
    
    if (contXF1 == 3 || contXF2 == 3 || contXF3 == 3 || contXC1 == 3 || contXC2 == 3|| contXC3 == 3 || contXDiagonal1 == 3 || contXDiagonal2 == 3) {
        
        localStorage.setItem("XWins",((parseInt(x) + 1)));
        conteinerWinx.innerHTML = x;
        //retorna "x" si el "x" gana, dependiendo de los contadores
        return "x";
    }else if(contOF1 == 3 || contOF2 == 3 || contOF3 == 3 || contOC1 == 3 || contOC2 == 3|| contOC3 == 3 || contODiagonal1 == 3 || contODiagonal2 == 3){

        localStorage.setItem("OWins",((parseInt(o) + 1)));
        conteinerWino.innerHTML = o;
        //retorna "o" si el "o" gana, dependiendo de los contadores.
        return "o";
    }
};

btn1.addEventListener("click", function(){
    
    window.location.reload();

});
