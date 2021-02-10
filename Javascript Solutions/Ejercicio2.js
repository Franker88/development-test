var salida ="";
function convertirAString(numero){
    console.log("Numero limite: "+numero);
    for (i=0;i<=numero;i++){
        salida ="";
        if(!(i%3)) salida+="Plic";
        if(!(i%5)) salida+="Plac";
        if(!(i%7)) salida+="Ploc";
        if(!salida) salida+=i.toString();
        console.log(salida);
    }    
}
convertirAString(parseInt(Math.random()*1001));