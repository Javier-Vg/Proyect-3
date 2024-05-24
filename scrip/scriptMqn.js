let btn1 = document.getElementById("repit");

let boxes = document.querySelectorAll(".cajasCont1");

let capa = document.querySelector(".capa");

//Contenedores a donde van los contadores de las win y empate:
let conteinerWinx = document.querySelector(".numeroWxMqn");
let conteinerWino = document.querySelector(".numeroWoMqn");
let conteinerEmpate = document.querySelector(".numeroEmpatesMqn");

if (localStorage.getItem('XWinsMqn') == null) {

    localStorage.setItem('XWinsMqn', 0);
    localStorage.setItem('OWinsMqn', 0);
    localStorage.setItem('EmpateMqn', 0); 
    
}

//Extraigo los numeros del locageStorage:
let x = localStorage.getItem('XWinsMqn');
let o = localStorage.getItem('OWinsMqn');
let e = localStorage.getItem('EmpateMqn');

console.log(x)

//Agrego el numero en el div correspondiente de cada contador.
conteinerWinx.innerHTML = x;
conteinerWino.innerHTML = o;
conteinerEmpate.innerHTML = e;

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

let trueFalse = true;

let matriz = [
    ["","",""],
    ["","",""],
    ["","",""]
];

function handleClick(evento) {

    let totalEmpate = 0;
    let totalWinsX = 0;
    let totalWinsO = 0;
    //currentTarget te manda el elemnto html que a sido clickeado, ejemplo, es lo mismo que si estuviera haciendo getElementById.
    //GetAtribute te devuelve el elemento propio, en este caso el " i ="0" ". 

    //Extraigo el ID desde el evento del la funcion, para despues agregarlo en el getElementId, para luego tomarlos como referencia al agregarlo al HTML con el appendChild
    let idString = evento.currentTarget.getAttribute("id");
    let IdDelDom = document.getElementById(idString);

    let fila = evento.currentTarget.getAttribute("i");

    let columna = evento.currentTarget.getAttribute("j");

    let equis = document.createElement("img");

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
                console.log("Esta aca")
                if (matriz[0][i] != "") {
                    if(matriz[1][i] != ""){
                        if(matriz[2][i]){
                            console.log("Espacio ocupado +1")
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
                };
            };
            //ESTO SE ENCICLAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
            setTimeout(Maquina, 1000);
        };
    };  
};

//Recorre lo divs ( cajas ) del HTML y escoge el clickeado desde la pagina

for (let index = 0; index < boxes.length; index++) {

    boxes[index].addEventListener("click", handleClick);

}

function Maquina() {
    
    let CordeCajas = {
        "box1" : "[0][0]",
        "box2" : "[0][1]",
        "box3" : "[0][2]",
        "box4" : "[1][0]",
        "box5" : "[1][1]",
        "box6" : "[1][2]",
        "box7" : "[2][0]",
        "box8" : "[2][1]",
        "box9" : "[2][2]"
    }

    let circulo = document.createElement("img");
    let FilaRandom = Math.floor(Math.random()*3);
    let ColumnaRandom = Math.floor(Math.random()*3);

    let CordenadaRandom = "["+FilaRandom+"]["+ColumnaRandom+"]";

    if (matriz[FilaRandom][ColumnaRandom] != "") {
  
        Maquina();
        
    }else{
       
        for (const llave in CordeCajas) {

            if (CordeCajas[llave] == CordenadaRandom) {
                
                //Extrae la llave del objeto "CordeCajas"
                let CajaElegida = document.getElementById(llave);

                circulo.className = "circulo";
                circulo.src = "/Proyect-3/img/crculoAmmarillo-removebg-preview.png";
                CajaElegida.appendChild(circulo);
                matriz[FilaRandom][ColumnaRandom] = "o";
                circulo.offsetHeight;
                circulo.classList.add('visible');

                if (ganador(matriz) == "x") {
                    console.log(matriz)
                    alert("El jugador X for the win");
                    capa.style.display = "inline-block";
                }else if((ganador(matriz) == "o")){
                    console.log(matriz)
                    alert("El jugador O for the win");
                    capa.style.display = "inline-block";
                }
                break;
            };
        };   
    };
};

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

    //Contador de 0 y X en la diagonal superior derecha y inferior izquierda.
    let contODiagonal2 = 0;
    let contXDiagonal2 = 0;

    console.log("aca")

    //----------------------------------------------------------------------------------------VALIDAR GANADOR CON 2 FOR------------------------------------------------------------------------------------------

    for (let i = 0; i < matriz.length; i++) {
        
        for (let j = 0; j < matriz.length; j++) {

            if (matriz[i][j] == "x") {
                if (i == 0) {
                    contXF1++;
                }else if (i == 1) {
                    contXF2++;
                }else if (i == 2) {
                    contXF3++;
                }
            }    

            if (matriz[i][j] == "o"){
                if (i == 0) {
                    contOF1++;
                }else if (i == 1) {
                    contOF2++;
                }else if (i == 2) {
                    contOF3++;
                }
            }

            if (matriz[j][i] == "x"){
                if (i == 0) {
                    contXC1++;
                }else if (i == 1) {
                    contXC2++;
                }else if (i == 2) {
                    contXC3++;
                }
            }

            if(matriz[j][i] == "o"){
                if (i == 0) {
                    contOC1++;
                }else if (i == 1) {
                    contOC2++;
                }else if (i == 2) {
                    contOC3++;
                }
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
    let decrementacion = 2;
    for (let j = 0; j < matriz.length; j++) {
        if (matriz[decrementacion][j] == "x") {
            
            contXDiagonal2++;
        }else if(matriz[decrementacion][j] == "o" ) {
            
            contODiagonal2++;
        };
        --decrementacion;
    };
    //--------------------------------------------------------------------------------------------VALIDAR GANADOR CON 2 FO--------------------------------------------------------------------------------------

    if (contXF1 == 3 || contXF2 == 3 || contXF3 == 3 || contXC1 == 3 || contXC2 == 3|| contXC3 == 3 || contXDiagonal1 == 3 || contXDiagonal2 == 3) {

        localStorage.setItem("XWinsMqn",((parseInt(x) + 1)));
        conteinerWinx.innerHTML = x;
        return "x";
    }else if(contOF1 == 3 || contOF2 == 3 || contOF3 == 3 || contOC1 == 3 || contOC2 == 3|| contOC3 == 3 || contODiagonal1 == 3 || contODiagonal2 == 3 ){

        localStorage.setItem("OWinsMqn",((parseInt(o) + 1)));
        conteinerWino.innerHTML = o;
        //retorna "o" si el "o" gana
        return "o";
    }
};

btn1.addEventListener("click", function(){
    window.location.reload();

});
