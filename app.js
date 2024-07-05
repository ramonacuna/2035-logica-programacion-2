let secretNumber = 0;
let intentos = 0;
let numeroSorteado = [];
let numeroMaximo = 10;

function modificarElemento(elemento, texto) {
    let elementoHtml = document.querySelector(elemento);
    elementoHtml.innerHTML = texto;
}

function getSecretNumber() {

    let numeroRamdon = Math.floor(Math.random()*numeroMaximo)+1;
    // Si el numero ramdon esta en la lista, generamos otro numero
    console.log(numeroSorteado);
    console.log(numeroRamdon);
    if(numeroSorteado.length == numeroMaximo){
        modificarElemento('p','Ya se sortearon todos los numeros')
    }else{
        if(numeroSorteado.includes(numeroRamdon)){
            return getSecretNumber(); 
        }else{
            numeroSorteado.push(numeroRamdon);
            return numeroRamdon; 
        } 
    }
}

function verificarElemento() {
    let inputUser = parseInt(document.getElementById('valorUsuario').value);
    console.log(inputUser);
    if(inputUser === secretNumber){
        modificarElemento('p', `Acertaste el numero en ${intentos} ${(intentos == 1)?'intento':'intentos'}
                                !!!Felicidades¡¡¡`);
        document.getElementById('reiniciar').removeAttribute('disabled');
        document.getElementById('intentar').setAttribute('disabled','true');
        }else if(inputUser > secretNumber){
        modificarElemento('p', 'El numero secreto es menor');  
            }else{
            modificarElemento('p', 'El numero secreto es mayor');
            }
    intentos++;
    cleanBox();
    return;
}


function cleanBox(){
    let valueBox = document.querySelector('#valorUsuario');
    valueBox.value = '';
}
//Limpiaremos la caja
//Se genera otro numero Secreto
//Se habilita el mensaje de inicio
//Se desabilita el boton de nuevo Juego
//reiniciar intentos
function reiniciarJuego(){
    condicionesIniciales();  
    document.getElementById('reiniciar').setAttribute('disabled','true');
    document.getElementById('intentar').removeAttribute('disabled');
}   

function condicionesIniciales(){
    modificarElemento('h1', 'Juego del numero secreto');
    modificarElemento('p', `Indica un numero del 1 al ${numeroMaximo}`);
    intentos = 1;
    secretNumber = getSecretNumber();
    cleanBox();
}

let listeGenerica = [];
let lenguajesDeProgramacion = ['JavaScript','C','C++','Kotlin','Python'];
lenguajesDeProgramacion.push('Java');
lenguajesDeProgramacion.push('Ruby');
lenguajesDeProgramacion.push('GoLang');
function lecturaLista(){
    lenguajesDeProgramacion.forEach(elemento =>{
        console.log(elemento);
    });
}

function lecturaListaReves(){
    let lista = lenguajesDeProgramacion
    lista.reverse().forEach(elemento =>{
        console.log(elemento);
    });
}

function promLista(){
    let listaNum = [10,5,5,10,5,5,5,5,5,10];
    let suma = 0;
    listaNum.forEach(i => {
        suma+=i;
    });
    let promedio = (suma/listaNum.length);
    console.log(promedio);
}

function MaxMin(){
    let listaNum = [6,5,5,1,5,5,7,5,5,10];
    let mayor = 0;
    let menor = listaNum[0];
    listaNum.forEach(i =>{
        if(i> mayor){
            mayor = i;
        }
        if(i< menor){
            menor = i;
        }
    })

    console.log(`El numero mayor es ${mayor}`);
    console.log(`El numero menor es ${menor}`);
}

function suma(){
    let listaNum = [6,5,5,1,5,5,7,5,5,10];
    let suma = 0;
    listaNum.forEach(i => {
        suma+=i;
    });
    console.log(suma);
}

function buscarCoincidencia(parametro){
    let lista = [1,2,3,4,5,6,7,8,9];
    let iteracion = 0;
    if(lista.includes(parametro)){
        lista.forEach(coincidencia =>{
            if(parametro == coincidencia){
                console.log(iteracion);
            }else{
                iteracion++;
            }
            })
    }else{
        console.log('-1');
    }
}
let listanum1 = [1,2,3,4,5,6,7,8,9];
let listanum = [1,2,3,4,5,6,7,8,9];

function sumaDelistas(lista1,lista2){
let listaNueva = [];
    if(lista1.length == lista2.length){
        for(i = 0 ; i<lista1.length ; i++){
            listaNueva.push(parseInt(lista1[i])+parseInt(lista2[i]));
        }
    }
    console.log(lista1);
    console.log(lista2);
    console.log(listaNueva);
}

function listaPotencia(lista){
    let listaRespuesta =[]
    lista.forEach(function (i){
        listaRespuesta.push(parseInt(i)**2);
    })
    console.log(lista);
    console.log(listaRespuesta);
}
//Por medio de la etiqueta scrip de html enlazamos, por lo cual al cargar el js esta funcion se ejecutara  
condicionesIniciales();

/* //Desafio

function saludo(){
    console.log('"¡Hola, mundo!" ');
}
function saludoUsuario(nombre){
    console.log(`Hola ${nombre}`);
}
function doble(x){
    let numero = parseInt(x);
    return 2*parseInt(x);
}
function promedio(a,b,c){
    let prom = parseFloat((parseInt(a)+parseInt(b)+parseInt(c))/3);
    return prom;
}
function mayorQue(a,b){
    if(a>b){
        return a;
    }else if(b>a){
        return b;
    }else{
        return;
    }
}

function potenciaDos(x){
    console-log(parseInt(x)*parseInt(x));
    return parseInt(x)*parseInt(x);
} */

/*  EJECUCION
    saludo();
    saludoUsuario('Rasputin');
    console.log(doble(3))
    console.log(promedio(2,2,3))
    console.log(mayorQue(3,2)); */

//Desafio 2
/* function calculoImc(peso, altura){
    let resultado = peso/(altura**2)
    return resultado;
}
function factorialNumero(entrada){
    let resultado = 1; 
    if(parseInt(entrada)> 1){ 
        resultado = parseInt(entrada) * (parseInt(entrada) - 1); 
            if(parseInt(entrada)- 1 > 0){
            resultado = resultado * factorialNumero(parseInt(entrada) - 2);
            }
    }
    return resultado;
}

function pesosDolares(pesos){
    return entrada = parseInt(pesos) * 0.00024;
}

function areaDeCuadratico(altura,base){
    return parseInt(altura)*parseInt(base);
}

function areaCirculo(radio){
    const pi = 3.14;
    let perimetro = 2*pi*parseInt(radio); 
    let area = pi*parseInt(radio)**2;
    return `El area del circulo es ${area} y su perimetro es ${perimetro}`;
}

function tablaMultiplicar(numero){
    alert(`Tabla de multiplicar del numero ${parseInt(numero)}
    ${parseInt(numero)} x 1 = ${parseInt(numero)*1}
    ${parseInt(numero)} x 2 = ${parseInt(numero)*2}
    ${parseInt(numero)} x 3 = ${parseInt(numero)*3}
    ${parseInt(numero)} x 4 = ${parseInt(numero)*4}
    ${parseInt(numero)} x 5 = ${parseInt(numero)*5}
    ${parseInt(numero)} x 6 = ${parseInt(numero)*6}
    ${parseInt(numero)} x 7 = ${parseInt(numero)*7}
    ${parseInt(numero)} x 8 = ${parseInt(numero)*8}
    ${parseInt(numero)} x 9 = ${parseInt(numero)*9}
    ${parseInt(numero)} x 10 = ${parseInt(numero)*10}`)
    return;
}
 */
