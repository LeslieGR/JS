console.log("********** Parte 1 **********");
console.log("Elige el valor para la función x escribiendo: x(valor);");     
function x (xValue){ 
while (xValue >= 0) {
    console.log (xValue);
    xValue = xValue - 0.5;
}
}
console.log("********** Parte 2 **********");
for (let num = 1; num <= 100; num += 2) {
    console.log(num);
  }

console.log ("********** Parte 3 **********"); 
function n(nValue){
    let y = 1;
    while (y <= nValue) {
      console.log("["+y+"]");
      y++;
    }
}

console.log ("********** Parte 4 **********"); 
function n2(nValue2){
let i = 0;
let j = 1;
function sum (i,j){
    while(j <= nValue2){
        i = j + i;
        j++;
    }
    return i;
} 
console.log(sum(i,j));
}