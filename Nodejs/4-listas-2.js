const notas = [];

notas.push(5);
notas.push(4);
notas.push(3);
notas.push(10);

let soma = 0;
for (let i = 0; i < notas.length; i++) {
    soma = soma + notas[i];
}

let media = soma / notas.length;
console.log("A média das notas [" + notas +"] é " + media);