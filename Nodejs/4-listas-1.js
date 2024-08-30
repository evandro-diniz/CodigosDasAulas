const alunos = ["Evandro", "João"];
//const professores = [];

//professores.push("Evandro");
//alunos.push("Maria");

//let ultimo = alunos.pop();
//console.log(alunos.length);
//console.log(alunos);

let posicao = alunos.indexOf("João");
console.log(posicao);
let rem = alunos.splice(posicao, 1);
console.log(alunos[1]);