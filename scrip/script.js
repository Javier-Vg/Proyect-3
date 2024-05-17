console.log("jaja");

let btn1 = document.getElementById("Play");

let box1 = document.getElementById("box1");
let box2 = document.getElementById("box2");
let box3 = document.getElementById("box3");
let box4 = document.getElementById("box4");
let box5 = document.getElementById("box5");
let box6 = document.getElementById("box6");
let box7 = document.getElementById("box7");
let box8 = document.getElementById("box8");
let box9 = document.getElementById("box9");

let trueFalse = true;

let matriz = [
    [0,1,2],
    [3,4,5],
    [6,7,8]
];

box1.addEventListener("click", function(){
    let equis = document.createElement("img");
    if (trueFalse == true) {
        if (box1.innerHTML != "") {
            alert("Este espacio esta jugado");
            
        }else{
            equis.className = "equis";
            equis.src = "/Proyect-3/img/equis2-removebg-preview.png";
            box1.appendChild(equis);
            matriz[0][0] = "x";
            trueFalse = false;
        }
    }else{
        if (box1.innerHTML != "") {
            alert("Este espacio esta jugado!");
            
        }else{
            equis.className = "circulo";
            equis.src = "/Proyect-3/img/circulo_Azul-removebg-preview.png";
            box1.appendChild(equis);
            matriz[0][0] = "o";
            trueFalse = true;
        }
    }

    if (ganador(matriz)) {
        alert("Has ganado la partida")
    }
});
box2.addEventListener("click", function(){
    let equis = document.createElement("img");

    if (trueFalse == true) {
        if (box2.innerHTML != "") {
            alert("Este espacio esta jugado");
            
        }else{
            equis.className = "equis";
            equis.src = "/Proyect-3/img/equis2-removebg-preview.png";
            box2.appendChild(equis);
            matriz[0][1] = "x";
            trueFalse = false;
        }
    }else{
        if (box1.innerHTML != "") {
            alert("Este espacio esta jugado");
            
        }else{
            equis.className = "circulo";
            equis.src = "/Proyect-3/img/circulo_Azul-removebg-preview.png";
            box2.appendChild(equis);
            matriz[0][1] = "o";
            trueFalse = true;
        }
    }
    if (ganador(matriz)) {
        alert("Has ganado la partida")
    }
});

box3.addEventListener("click", function(){
    let equis = document.createElement("img");

    if (trueFalse == true) {
        if (box3.innerHTML != "") {
            alert("Este espacio esta jugado");
            
        }else{
            equis.className = "equis";
            equis.src = "/Proyect-3/img/equis2-removebg-preview.png";
            box3.appendChild(equis);
            matriz[0][2] = "x";
            trueFalse = false;
        }
    }else{
        if (box3.innerHTML != "") {
            alert("Este espacio esta jugado");
            
        }else{
            equis.className = "circulo";
            equis.src = "/Proyect-3/img/circulo_Azul-removebg-preview.png";
            box3.appendChild(equis);
            matriz[0][2] = "o";
            trueFalse = true;
        }
    }

    //validamos si lo que devuelve es true para saber que alguien ganó
    if (ganador(matriz)) {

        alert("Has ganado la partida");
    }
});

box4.addEventListener("click", function(){

    let equis = document.createElement("img");

    if (trueFalse == true) {
        if (box4.innerHTML != "") {
            alert("Este espacio esta jugado");
            
        }else{
            equis.className = "equis";
            equis.src = "/Proyect-3/img/equis2-removebg-preview.png";
            box4.appendChild(equis);
            matriz[1][0] = "x";
            trueFalse = false;
        }
    }else{
        if (box4.innerHTML != "") {
            alert("Este espacio esta jugado");
            
        }else{
            equis.className = "circulo";
            equis.src = "/Proyect-3/img/circulo_Azul-removebg-preview.png";
            box4.appendChild(equis);
            matriz[1][0] = "o";
            trueFalse = true;
        }
    }
});

box5.addEventListener("click", function(){
    let equis = document.createElement("img");

    if (trueFalse == true) {
        if (box5.innerHTML != "") {
            alert("Este espacio esta jugado");
            
        }else{
            equis.className = "equis";
            equis.src = "/Proyect-3/img/equis2-removebg-preview.png";
            box5.appendChild(equis);
            matriz[1][1] = "x";
            trueFalse = false;
        }
    }else{
        if (box5.innerHTML != "") {
            alert("Este espacio esta jugado");
            
        }else{
            equis.className = "circulo";
            equis.src = "/Proyect-3/img/circulo_Azul-removebg-preview.png";
            box5.appendChild(equis);
            matriz[1][1] = "o";
            trueFalse = true;
        }
    }
});

box6.addEventListener("click", function(){
    let equis = document.createElement("img");

    if (trueFalse == true) {
        if (box6.innerHTML != "") {
            alert("Este espacio esta jugado");
            
        }else{
            equis.className = "equis";
            equis.src = "/Proyect-3/img/equis2-removebg-preview.png";
            box6.appendChild(equis);
            matriz[1][2] = "x";
            trueFalse = false;
        }
    }else{
        if (box1.innerHTML != "") {
            alert("Este espacio esta jugado");
            
        }else{
            equis.className = "circulo";
            equis.src = "/Proyect-3/img/circulo_Azul-removebg-preview.png";
            box6.appendChild(equis);
            matriz[1][2] = "o";
            trueFalse = true;
        }
    }
});

box7.addEventListener("click", function(){
    let equis = document.createElement("img");

    if (trueFalse == true) {
        if (box7.innerHTML != "") {
            alert("Este espacio esta jugado");
            
        }else{
            equis.className = "equis";
            equis.src = "/Proyect-3/img/equis2-removebg-preview.png";
            box7.appendChild(equis);
            matriz[2][0] = "x";
            trueFalse = false;
        }
    }else{
        if (box7.innerHTML != "") {
            alert("Este espacio esta jugado");
            
        }else{
            equis.className = "circulo";
            equis.src = "/Proyect-3/img/circulo_Azul-removebg-preview.png";
            box7.appendChild(equis);
            matriz[2][0] = "o";
            trueFalse = true;
        }
    }
});

box8.addEventListener("click", function(){
    let equis = document.createElement("img");

    if (trueFalse == true) {
        if (box8.innerHTML != "") {
            alert("Este espacio esta jugado");
            
        }else{
            equis.className = "equis";
            equis.src = "/Proyect-3/img/equis2-removebg-preview.png";
            box8.appendChild(equis);
            matriz[2][1] = "x";
            trueFalse = false;
        }
    }else{
        if (box8.innerHTML != "") {
            alert("Este espacio esta jugado");
            
        }else{
            equis.className = "circulo";
            equis.src = "/Proyect-3/img/circulo_Azul-removebg-preview.png";
            box8.appendChild(equis);
            matriz[2][1] = "o";
            trueFalse = true;
        }
    }
});

box9.addEventListener("click", function(){
    let equis = document.createElement("img");

    if (trueFalse == true) {
        if (box9.innerHTML != "") {
            alert("Este espacio esta jugado");
            
        }else{
            equis.className = "equis";
            equis.src = "/Proyect-3/img/equis2-removebg-preview.png";
            box9.appendChild(equis);
            matriz[2][2] = "x";
            trueFalse = false;
        }
    }else{
        if (box9.innerHTML != "") {
            alert("Este espacio esta jugado");
            
        }else{
            equis.className = "circulo";
            equis.src = "/Proyect-3/img/circulo_Azul-removebg-preview.png";
            box9.appendChild(equis);
            matriz[2][2] = "o";
            trueFalse = true;
        }
    }
});

console.log(matriz);

//------------------------------------------------------------------FUNCION GANADORA-------------------------------------------------------------------
function ganador(matriz) {

    //creamos 2 variables que validen si hay 3 x en la posicion, o 3 circulos en la posicion.
    //se creamos 2 contadores para cada simbolo que nos dice si el contador es 3 es por que ya, alguien ganó.

    let contX = 0;
    let contO = 0;

    //Validacion para ganadores:

    //tenemos un for que nos ayudará a recorrer cada espacio de la fila 1.
    for (let i = 0; i < matriz.length; i++) {
        //validamos la fila 1 para ver si alguien gano.
        if (matriz[0][i] == "x") {
            contX++;
        //validamos la fila 1 para ver si alguien gano
        }else if(matriz[0][i] == "o"){
            contO++;
        }
    };

    for (let i = 0; i < matriz.length; i++) {
        //validamos la fila 1 para ver si alguien gano.
        if (matriz[0][i] == "x") {
            contX++;
        //validamos la fila 1 para ver si alguien gano
        }else if(matriz[0][i] == "o"){
            contO++;
        }
    };

    //se valida si el contador tiene un 3 que esto nos indica que ya ganó
    if (contX == 3 || contO == 3) {
        return true;
    }else{
        //retorna false si no hay ganador.
        return false;
    }
};


    // if (i = 0) {

    //     if (matriz[0][0] == "x" && matriz[0][1] == "x" && matriz[0][2] == "x") {
    //         alert("El jugador 'X' gano!");
    //         break;

    //     }else if(matriz[0][0] == "x" && matriz[1][1] == "x" && matriz[2][2] == "x"){
    //         alert("El jugador 'X' gano!");
    //         break;
        
    //     }else if(matriz[0][0] == "x" && matriz[1][0] == "x" && matriz[2][0] == "x"){
    //         alert("El jugador 'X' gano!");
    //         break;

    //     }else if(matriz[0][0] == "o" && matriz[1][0] == "o" && matriz[2][0] == "o"){
    //         alert("El jugador 'o' gano!");
    //         break;

    //     }else if(matriz[0][0] == "o" && matriz[1][0] == "o" && matriz[2][0] == "o"){
    //         alert("El jugador 'o' gano!");
    //         break;

    //     }else if(matriz[0][0] == "o" && matriz[1][0] == "o" && matriz[2][0] == "o"){
    //         alert("El jugador 'o' gano!");
    //         break;
    //     }

    // }else if (i = 1) {

    //     if (matriz[0][1] == "x" && matriz[0][2] == "x" && matriz[0][0] == "x") {
    //         alert("El jugador 'X' gano!");
    //         break;

    //     }else if(matriz[0][1] == "x" && matriz[1][1] == "x" && matriz[2][1] == "x"){
    //         alert("El jugador 'X' gano!");
    //         break;
        
    //     }else if(matriz[0][1] == "o" && matriz[0][2] == "o" && matriz[0][0] == "o"){
    //         alert("El jugador 'O' gano!");
    //         break;

    //     }else if(matriz[0][1] == "o" && matriz[1][1] == "o" && matriz[2][1] == "o"){
    //         alert("El jugador 'O' gano!");
    //         break;

    //     }

    // }else if (i = 2) {

    //     if (matriz[0][2] == "x" && matriz[0][1] == "x" && matriz[0][0] == "x") {
    //         alert("El jugador 'X' gano!");
    //         break;

    //     }else if(matriz[0][2] == "x" && matriz[1][1] == "x" && matriz[2][0] == "x"){
    //         alert("El jugador 'X' gano!");
    //         break;
        
    //     }else if(matriz[0][2] == "x" && matriz[1][2] == "x" && matriz[2][2] == "x"){
    //         alert("El jugador 'X' gano!");
    //         break;

    //     }else if(matriz[0][2] == "o" && matriz[0][1] == "o" && matriz[0][0] == "o"){
    //         alert("El jugador 'o' gano!");
    //         break;

    //     }else if(matriz[0][2] == "o" && matriz[1][1] == "o" && matriz[2][0] == "o"){
    //         alert("El jugador 'o' gano!");
    //         break;

    //     }else if(matriz[0][2] == "o" && matriz[1][2] == "o" && matriz[2][2] == "o"){
    //         alert("El jugador 'o' gano!");
    //         break;
    //     }
        
    // }else if (i = 3) {
        
    // }else if (i = 4) {
        
    // }else if (i = 5) {
        
    // }else if (i = 6) {
        
    // }else if (i = 7) {
        
    // }else if (i = 8) {
        
    // }


    //****************************************************************** */
    // }else if(matriz[0][i]== "o" && matriz[0][i+1] == "o" && matriz[0][i+2] == "o" ){
    //     alert("El jugador 'O' Gano!");

    // }





// if (matriz[0][0] == "x" && matriz[0][1] == "x" && matriz[0][2] == "x" ) {
//     alert("Usted a ganado :");
// };

btn1.addEventListener("click", function(){
    

});