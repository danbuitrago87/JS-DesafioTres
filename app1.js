//DEFINIENDO EL CICLO WHILE PARA EL JUEGO DE NUMERO
//let numSecret=85;
let num=0;
let cont=0;
let intentos=3;

alert("BIENVENIDO AL JUEGO DEL NÚMERO SECRETO, TIENES 3 INTENTOS");
let numSecret=parseInt(Math.random()*10);//la funcion random escoge un numero entre 0 y 1, parseInt lo convierte a entero
console.log(numSecret);//se muestra en la consola
while(num!=numSecret){
    let num=prompt("Digita un número del 1 al 10: ");
    cont++;
    if (num==numSecret){
        alert("Acertaste");  
        alert(`El número de intentos fue: ${cont} ${cont==1 ? 'vez':'veces'}`);//operador ternario
        cont=0;
        break;
    }else{
        intentos--;
        if (intentos==0){
            alert("PERDISTE");
            break;
        }
        if (num<numSecret)
            alert("El número es mayor...");
        if (num>numSecret)
            alert("El número es menor...")
        alert(`Te quedan ${intentos} intentos`)
    }
} 
