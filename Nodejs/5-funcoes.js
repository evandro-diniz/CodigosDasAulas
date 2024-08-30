function saudacao() {
    console.log("Olá mundo");
}

function soma(num1, num2){
    console.log(num1 + num2);
}

function soma2(num1, num2){
    return (num1 + num2);
}

let num1 = 11;
let num2 = 22;

saudacao();
soma(num1, num2);
let somado = soma2(num1, num2);
console.log(somado);