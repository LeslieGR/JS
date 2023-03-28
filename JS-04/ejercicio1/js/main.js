console.log("************Parte 1**********");
let nombresFila = ["Sofia", "David", "Juan"];
console.log(nombresFila);

console.log("************Parte 2**********");
nombresFila.push("Sara", "Agustin");
nombresFila.shift();
console.log(nombresFila);

console.log("************Parte 3**********");
nombresFila.splice( 1, 0, "Renata");
nombresFila.push("Elena");
console.log(nombresFila);