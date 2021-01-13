const alphabet = ["a", "b", "c", "d", "e", "f"];

const [a] = alphabet;
console.log(a); //a

const [, , c] = alphabet;
console.log(c); //c

const [, b, , , , f] = alphabet;
console.log(`${b} ${f}`); //b f

const [letraA] = alphabet;
console.log(letraA); //a
