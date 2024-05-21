console.log("jaja");

let btn1 = document.getElementById("repit");

let boxes = document.querySelectorAll(".cajasCont1");

let trueFalse = true;

function handleClick(evento) {
    //currentTarget te manda el elemnto html que a sido clickeado, ejemplo, es lo mismo que si estuviera haciendo getElementById.
    //GetAtribute te devuelve el elemento propio, en este caso el " i ="0" ". 

    //
    let cajaTarget= evento.currentTarget.getAttribute("id");

    let cajaGetElemento = document.getElementById(cajaTarget);

    console.log(evento.currentTarget.getAttribute("i"));
    console.log(evento.currentTarget.getAttribute("j"));

    let fila = evento.currentTarget.getAttribute("i");

    let columna = evento.currentTarget.getAttribute("j");

    let equis = document.createElement("img");
    
    
    if (trueFalse == true) {

        //corregi el box1 por la caja que tengas:----------------------------------------------------
        if (cajaGetElemento.innerHTML != "") {
            alert("Este espacio esta jugado");
            
        }else{
            equis.className = "equis";
            equis.src = "/Proyect-3/img/equis2-removebg-preview.png";
            cajaGetElemento.appendChild(equis);
            matriz[fila][columna] = "x";
            trueFalse = false;

            equis.offsetHeight;
            equis.classList.add('visible');
        }
    }else{
        if (cajaGetElemento.innerHTML != "") {
            alert("Este espacio esta jugado!");
            
        }else{
            equis.className = "circulo";
            equis.src = "/Proyect-3/img/circulo_Azul-removebg-preview.png";
            cajaGetElemento.appendChild(equis);
            matriz[fila][columna] = "o";
            trueFalse = true;

            equis.offsetHeight;
            equis.classList.add('visible');
        }
    }

    if (ganador(matriz) == "x") {
        alert("El jugador X for the win");
        capa.style.display = "inline-block";
        ++totalWinsX;
        localStorage.setItem("XWins",totalWinsX );

    }else if((ganador(matriz) =="o")){
        alert("El jugador O for the win");
        capa.style.display = "inline-block";
        ++totalWinsO;
        localStorage.setItem("OWins",totalWinsO );
        
    };

    console.log(matriz);
}
//-----------------------------------------------------------------------------------------------------
for (let index = 0; index < boxes.length; index++) {

    console.log(boxes[index]);
    boxes[index].addEventListener("click", handleClick);

}
//------------------------------------------------------------------------------------------------------
let capa = document.querySelector(".capa");

let totalWinsX = 0;
parseInt(totalWinsX);

let totalWinsO = 0;
parseInt(totalWinsO);

let totalEmpate = 0;
parseInt(totalEmpate);


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

// box1.addEventListener("click", function(){
//     let equis = document.createElement("img");
//     if (trueFalse == true) {
//         if (box1.innerHTML != "") {
//             alert("Este espacio esta jugado");
            
//         }else{
//             equis.className = "equis";
//             equis.src = "/Proyect-3/img/equis2-removebg-preview.png";
//             box1.appendChild(equis);
//             matriz[0][0] = "x";
//             trueFalse = false;

//             equis.offsetHeight;
//             equis.classList.add('visible');
//         }
//     }else{
//         if (box1.innerHTML != "") {
//             alert("Este espacio esta jugado!");
            
//         }else{
//             equis.className = "circulo";
//             equis.src = "/Proyect-3/img/circulo_Azul-removebg-preview.png";
//             box1.appendChild(equis);
//             matriz[0][0] = "o";
//             trueFalse = true;

//             equis.offsetHeight;
//             equis.classList.add('visible');
//         }
//     }

//     if (ganador(matriz) == "x") {
//         alert("El jugador X for the win");
//         capa.style.display = "inline-block";
//         ++totalWinsX;
//         localStorage.setItem("XWins",totalWinsX );

//     }else if((ganador(matriz) =="o")){
//         alert("El jugador O for the win");
//         capa.style.display = "inline-block";
//         ++totalWinsO;
//         localStorage.setItem("OWins",totalWinsO );
        
//     };
// });
// box2.addEventListener("click", function(){
//     let equis = document.createElement("img");

//     if (trueFalse == true) {
//         if (box2.innerHTML != "") {
//             alert("Este espacio esta jugado");
            
//         }else{
//             equis.className = "equis";
//             equis.src = "/Proyect-3/img/equis2-removebg-preview.png";
//             box2.appendChild(equis);
//             matriz[0][1] = "x";
//             trueFalse = false;
//             equis.offsetHeight;
//             equis.classList.add('visible');
            
//         }
//     }else{
//         if (box2.innerHTML != "") {
//             alert("Este espacio esta jugado");
            
//         }else{
//             equis.className = "circulo";
//             equis.src = "/Proyect-3/img/circulo_Azul-removebg-preview.png";
//             box2.appendChild(equis);
//             matriz[0][1] = "o";
//             trueFalse = true;

//             equis.offsetHeight;
//             equis.classList.add('visible');
//         }
//     }
//     if (ganador(matriz) == "x") {
//         alert("El jugador X for the win");
//         capa.style.display = "inline-block";
//         ++totalWinsX;
//         localStorage.setItem("XWins",totalWinsX );

//     }else if((ganador(matriz) =="o")){
//         alert("El jugador O for the win");
//         capa.style.display = "inline-block";
//         ++totalWinsO;
//         localStorage.setItem("OWins",totalWinsO );
//     };
// });

// box3.addEventListener("click", function(){
//     let equis = document.createElement("img");

//     if (trueFalse == true) {
//         if (box3.innerHTML != "") {
//             alert("Este espacio esta jugado");
            
//         }else{
//             equis.className = "equis";
//             equis.src = "/Proyect-3/img/equis2-removebg-preview.png";
//             box3.appendChild(equis);
//             matriz[0][2] = "x";
//             trueFalse = false;

//             equis.offsetHeight;
//             equis.classList.add('visible');
//         }
//     }else{
//         if (box3.innerHTML != "") {
//             alert("Este espacio esta jugado");
            
//         }else{
//             equis.className = "circulo";
//             equis.src = "/Proyect-3/img/circulo_Azul-removebg-preview.png";
//             box3.appendChild(equis);
//             matriz[0][2] = "o";
//             trueFalse = true;

//             equis.offsetHeight;
//             equis.classList.add('visible');
//         }
//     }

//     //validamos si lo que devuelve es true para saber que alguien ganó
//     if (ganador(matriz) == "x") {
//         alert("El jugador X for the win");
//         capa.style.display = "inline-block";
//         ++totalWinsX;
//         localStorage.setItem("XWins",totalWinsX );

//     }else if((ganador(matriz) =="o")){
//         alert("El jugador O for the win");
//         capa.style.display = "inline-block";
//         ++totalWinsO;
//         localStorage.setItem("OWins",totalWinsO );
//     };
// });

// box4.addEventListener("click", function(){

//     let equis = document.createElement("img");

//     if (trueFalse == true) {
//         if (box4.innerHTML != "") {
//             alert("Este espacio esta jugado");
            
//         }else{
//             equis.className = "equis";
//             equis.src = "/Proyect-3/img/equis2-removebg-preview.png";
//             box4.appendChild(equis);
//             matriz[1][0] = "x";
//             trueFalse = false;

//             equis.offsetHeight;
//             equis.classList.add('visible');
//         }
//     }else{
//         if (box4.innerHTML != "") {
//             alert("Este espacio esta jugado");
            
//         }else{
//             equis.className = "circulo";
//             equis.src = "/Proyect-3/img/circulo_Azul-removebg-preview.png";
//             box4.appendChild(equis);
//             matriz[1][0] = "o";
//             trueFalse = true;

//             equis.offsetHeight;
//             equis.classList.add('visible');
//         }
//     }
//     if (ganador(matriz) == "x") {
//         alert("El jugador X for the win");
//         capa.style.display = "inline-block";
//         ++totalWinsX;
//         localStorage.setItem("XWins",totalWinsX );

//     }else if((ganador(matriz) =="o")){
//         alert("El jugador O for the win");
//         capa.style.display = "inline-block";
//         ++totalWinsO;
//         localStorage.setItem("OWins",totalWinsO );
//     };
// });

// box5.addEventListener("click", function(){
//     let equis = document.createElement("img");



//     if (trueFalse == true) {
//         if (box5.innerHTML != "") {
//             alert("Este espacio esta jugado");
            
//         }else{
//             equis.className = "equis";
//             equis.src = "/Proyect-3/img/equis2-removebg-preview.png";
//             box5.appendChild(equis);
//             matriz[1][1] = "x";
//             trueFalse = false;

//             equis.offsetHeight;
//             equis.classList.add('visible');
//         }
//     }else{
//         if (box5.innerHTML != "") {
//             alert("Este espacio esta jugado");
            
//         }else{
//             equis.className = "circulo";
//             equis.src = "/Proyect-3/img/circulo_Azul-removebg-preview.png";
//             box5.appendChild(equis);
//             matriz[1][1] = "o";
//             trueFalse = true;

//             equis.offsetHeight;
//             equis.classList.add('visible');
//         }
//     }
//     if (ganador(matriz) == "x") {
//         alert("El jugador X for the win");
//         capa.style.display = "inline-block";
//         ++totalWinsX;
//         localStorage.setItem("XWins",totalWinsX );

//     }else if((ganador(matriz) =="o")){
//         alert("El jugador O for the win");
//         capa.style.display = "inline-block";
//         ++totalWinsO;
//         localStorage.setItem("OWins",totalWinsO );
//     };
// });

// box6.addEventListener("click", function(){
//     let equis = document.createElement("img");

//     if (trueFalse == true) {
//         if (box6.innerHTML != "") {
//             alert("Este espacio esta jugado");
            
//         }else{
//             equis.className = "equis";
//             equis.src = "/Proyect-3/img/equis2-removebg-preview.png";
//             box6.appendChild(equis);
//             matriz[1][2] = "x";
//             trueFalse = false;

//             equis.offsetHeight;
//             equis.classList.add('visible');
//         }
//     }else{
//         if (box6.innerHTML != "") {
//             alert("Este espacio esta jugado");
            
//         }else{
//             equis.className = "circulo";
//             equis.src = "/Proyect-3/img/circulo_Azul-removebg-preview.png";
//             box6.appendChild(equis);
//             matriz[1][2] = "o";
//             trueFalse = true;

//             equis.offsetHeight;
//             equis.classList.add('visible');
//         }
//     }
    
//     if (ganador(matriz) == "x") {
//         alert("El jugador X for the win");
//         capa.style.display = "inline-block";
//         ++totalWinsX;
//         localStorage.setItem("XWins",totalWinsX );

//     }else if((ganador(matriz) =="o")){
//         alert("El jugador O for the win");
//         capa.style.display = "inline-block";
//         ++totalWinsO;
//         localStorage.setItem("OWins",totalWinsO );
//     };
// });

// box7.addEventListener("click", function(){
//     let equis = document.createElement("img");

//     if (trueFalse == true) {
//         if (box7.innerHTML != "") {
//             alert("Este espacio esta jugado");
            
//         }else{
//             equis.className = "equis";
//             equis.src = "/Proyect-3/img/equis2-removebg-preview.png";
//             box7.appendChild(equis);
//             matriz[2][0] = "x";
//             trueFalse = false;

//             equis.offsetHeight;
//             equis.classList.add('visible');
//         }
//     }else{
//         if (box7.innerHTML != "") {
//             alert("Este espacio esta jugado");
            
//         }else{
//             equis.className = "circulo";
//             equis.src = "/Proyect-3/img/circulo_Azul-removebg-preview.png";
//             box7.appendChild(equis);
//             matriz[2][0] = "o";
//             trueFalse = true;

//             equis.offsetHeight;
//             equis.classList.add('visible');
//         }
//     }
//     if (ganador(matriz) == "x") {
//         alert("El jugador X for the win");
//         capa.style.display = "inline-block";
//         ++totalWinsX;
//         localStorage.setItem("XWins",totalWinsX );

//     }else if((ganador(matriz) =="o")){
//         alert("El jugador O for the win");
//         capa.style.display = "inline-block";
//         ++totalWinsO;
//         localStorage.setItem("OWins",totalWinsO );
//     };
// });

// box8.addEventListener("click", function(){
//     let equis = document.createElement("img");

//     if (trueFalse == true) {
//         if (box8.innerHTML != "") {
//             alert("Este espacio esta jugado");
            
//         }else{
//             equis.className = "equis";
//             equis.src = "/Proyect-3/img/equis2-removebg-preview.png";
//             box8.appendChild(equis);
//             matriz[2][1] = "x";
//             trueFalse = false;

//             equis.offsetHeight;
//             equis.classList.add('visible');
//         }
//     }else{
//         if (box8.innerHTML != "") {
//             alert("Este espacio esta jugado");
            
//         }else{
//             equis.className = "circulo";
//             equis.src = "/Proyect-3/img/circulo_Azul-removebg-preview.png";
//             box8.appendChild(equis);
//             matriz[2][1] = "o";
//             trueFalse = true;

//             equis.offsetHeight;
//             equis.classList.add('visible');
//         }
//     }
//     if (ganador(matriz) == "x") {
//         alert("El jugador X for the win");
//         capa.style.display = "inline-block";
//         ++totalWinsX;
//          localStorage.setItem("XWins",totalWinsX );

//     }else if((ganador(matriz) =="o")){
//         alert("El jugador O for the win");
//         capa.style.display = "inline-block";
//         ++totalWinsO;
//         localStorage.setItem("OWins",totalWinsO );
//     };
// });

// box9.addEventListener("click", function(){
//     let equis = document.createElement("img");

//     if (trueFalse == true) {
//         if (box9.innerHTML != "") {
//             alert("Este espacio esta jugado");
            
//         }else{
//             equis.className = "equis";
//             equis.src = "/Proyect-3/img/equis2-removebg-preview.png";
//             box9.appendChild(equis);
//             matriz[2][2] = "x";
//             trueFalse = false;

//             equis.offsetHeight;
//             equis.classList.add('visible');
//         }
//     }else{
//         if (box9.innerHTML != "") {
//             alert("Este espacio esta jugado");
            
//         }else{
//             equis.className = "circulo";
//             equis.src = "/Proyect-3/img/circulo_Azul-removebg-preview.png";
//             box9.appendChild(equis);
//             matriz[2][2] = "o";
//             trueFalse = true;

//             equis.offsetHeight;
//             equis.classList.add('visible');
//         }
//     }
//     if (ganador(matriz) == "x") {
//         alert("El jugador X for the win");
//         capa.style.display = "inline-block";
//         ++totalWinsX;
//         localStorage.setItem("XWins",totalWinsX );

//     }else if((ganador(matriz) =="o")){
//         alert("El jugador O for the win");
//         capa.style.display = "inline-block";
//         ++totalWinsO;
//         localStorage.setItem("OWins",totalWinsO );
//     };
// });


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

    //Contador de 0 en la diagonal superior izquierda y inferior derecha.
    let contODiagonal1 = 0;
    let contXDiagonal1 = 0;

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
        }
        
        if (EspacioOcupado == 3) {
            alert("EMPATE, vuelva a jugar...");
            capa.style.display = "inline-block";
            ++totalEmpate;
            localStorage.setItem("Empate",totalEmpate );
            break;
        }
    };


    //Validacion para ganadores:

    //---------Valida la fila, columnna 1------------

    for (let i = 0; i < matriz.length; i++) {
        
        if (matriz[0][i] == "x") {
            contXF1++;
        }else if(matriz[0][i] == "o"){
            contOF1++;
        }

        if (matriz[i][0] == "x") {
            contXC1++;
        }else if(matriz[i][0] == "o"){
            contOC1++;
        }
    };

    //----------Valida la fila, columnna 2-------------

    for (let i = 0; i < matriz.length; i++) {
        //validamos la fila 1 para ver si alguien gano.
        if (matriz[1][i] == "x") {
            contXF2++;
        }else if(matriz[1][i] == "o"){
            contOF2++;
        }

        if (matriz[i][1] == "x") {
            contXC2++;
        }else if(matriz[i][1] == "o"){
            contOC2++;
        }
    };

    //---------Valida la fila y columnna 3--------------
    //-----------Valida las 2 diagonales-------------

    for (let i = 0; i < matriz.length; i++) {
        //validamos la fila 1 para ver si alguien gano.
        if (matriz[2][i] == "x") {
            contXF3++;
        }else if(matriz[2][i] == "o"){
            contOF3++;
        }

        if (matriz[i][2] == "x") {
            contXC3++;
        }else if(matriz[i][2] == "o"){
            contOC3++;
        }

        //diagonal 1 verificador
        if (matriz[i][i] == "x") {
            contXDiagonal1++;
        }else if(matriz[i][i] == "o"){
            contODiagonal1++;
        }

        //diagonal 2 verificador

        if (matriz[2][0] == "x" && matriz[1][1] == "x" && matriz[0][2] == "x") {
            return "x";
        }else if(matriz[2][0] == "o" && matriz[1][1] == "o" && matriz[0][2] == "o"){
            return "o";
        }
    };

    
    if (contXF1 == 3 || contXF2 == 3 || contXF3 == 3 || contXC1 == 3 || contXC2 == 3|| contXC3 == 3 || contXDiagonal1 == 3 ) {
        return "x";
    }else if(contOF1 == 3 || contOF2 == 3 || contOF3 == 3 || contOC1 == 3 || contOC2 == 3|| contOC3 == 3 || contODiagonal1 == 3 ){
        //retorna "o" si el "o" gana
        return "o";
    }
};




btn1.addEventListener("click", function(){
    
    window.location.reload();
    

});