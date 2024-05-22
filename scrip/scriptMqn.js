let btn1 = document.getElementById("repit");

let boxes = document.querySelectorAll(".cajasCont1");

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

let trueFalse = true;

let matriz = [
    ["","",""],
    ["","",""],
    ["","",""]
];


function handleClick(evento) {
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
        equis.src = "/Proyect-3/img/equis2-removebg-preview.png";
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
            //ESTO SE ENCICLAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
            setTimeout(Maquina, 1000);
        };
    }    
}

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

    console.log(CordenadaRandom)

    if (matriz[FilaRandom][ColumnaRandom] != "") {
        console.log("cambio")
        Maquina();
        
        
    }else{
        console.log(CordenadaRandom)

        //  ESTE CODIGO ES EL QUE ENCICLAAAAAAAAAAAAAAAAAAAAAAAAAA
       
        for (const llave in CordeCajas) {
            
            console.log("entra a el for")

            if (CordeCajas[llave] == CordenadaRandom) {
                console.log("entra al if")
                
                //Extrae la llave del objeto "CordeCajas"
                let CajaElegida = document.getElementById(llave);

                circulo.className = "circulo";
                circulo.src = "/Proyect-3/img/circulo_Azul-removebg-preview.png";
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
                }else{

                    //VALIDAR EL EMMPATEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE

                    console.log("ahhhhhhhhh")
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
                         }
                     };
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

    let EspacioOcupado = 0;

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
        if (i == 2) {
            console.log("nn")
            break;
            
        }
    };
    console.log("el for esta joya");
    //diagonal 2 verificador
    if (matriz[2][0] == "x" && matriz[1][1] == "x" && matriz[0][2] == "x") {
        return "x";
    }else if(matriz[2][0] == "o" && matriz[1][1] == "o" && matriz[0][2] == "o") {
        return "o";
    };
    //--------------------------------------------------------------------------------------------VALIDAR GANADOR CON 2 FO--------------------------------------------------------------------------------------

    //Validacion para ganadores:
    //---------Valida la fila, columnna 1------------

    // for (let i = 0; i < matriz.length; i++) {
        
    //     if (matriz[0][i] == "x") {
    //         contXF1++;
    //     }else if(matriz[0][i] == "o"){
    //         contOF1++;
    //     }

    //     if (matriz[i][0] == "x") {
    //         contXC1++;
    //     }else if(matriz[i][0] == "o"){
    //         contOC1++;
    //     }
    // };

    // //----------Valida la fila, columnna 2-------------

    // for (let i = 0; i < matriz.length; i++) {
    //     //validamos la fila 1 para ver si alguien gano.
    //     if (matriz[1][i] == "x") {
    //         contXF2++;
    //     }else if(matriz[1][i] == "o"){
    //         contOF2++;
    //     }

    //     if (matriz[i][1] == "x") {
    //         contXC2++;
    //     }else if(matriz[i][1] == "o"){
    //         contOC2++;
    //     }
    // };

    //---------Valida la fila y columnna 3--------------
    //-----------Valida las 2 diagonales-------------

    // for (let i = 0; i < matriz.length; i++) {
    //     //validamos la fila 1 para ver si alguien gano.
    //     if (matriz[2][i] == "x") {
    //         contXF3++;
    //     }else if(matriz[2][i] == "o"){
    //         contOF3++;
    //     }

    //     if (matriz[i][2] == "x") {
    //         contXC3++;
    //     }else if(matriz[i][2] == "o"){
    //         contOC3++;
    //     }

    //     //diagonal 1 verificador
    //     if (matriz[i][i] == "x") {
    //         contXDiagonal1++;
    //     }else if(matriz[i][i] == "o"){
    //         contODiagonal1++;
    //     }

        
    // };
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
