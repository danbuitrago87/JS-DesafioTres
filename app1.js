//DEFINIENDO EL CICLO WHILE PARA EL JUEGO DE NUMERO
let numSecret=85;
let num=0;
let cont=0;
let intentos=3;

alert("BIENVENIDO AL JUEGO DEL NÚMERO SECRETO, TIENES 3 INTENTOS");
while(num!=numSecret){
    let num=prompt("Digita un número del 1 al 100: ");
    cont++;
    if (num==numSecret){
        alert("Acertaste");  
        alert(`El número de intentos fue: ${cont}`);
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
