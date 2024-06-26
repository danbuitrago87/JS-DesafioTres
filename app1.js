//DEFINIENDO EL CICLO WHILE PARA EL JUEGO DE NUMERO
let numSecret=85;
let num=0;

while(num!=numSecret){
    let num=prompt("Digita un número del 1 al 100: ");
    if (num==numSecret){
        alert("Acertaste");
    }else{
        if (num<numSecret)
            alert("El número es mayor...");
        if (num>numSecret)
            alert("El número es menor...")
    }
}
