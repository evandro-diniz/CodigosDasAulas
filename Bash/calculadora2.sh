#!/bin/bash

res="sim"
while [ $res = "sim" ]
do

echo "################ CALCULADORA ####################"
echo "Para começar, digite dois números"
echo "Primeiro número: "; read num1
echo "Segundo número: "; read num2

echo "Escolha uma das operações matemáticas: "
echo "Digite 1 para somar;"
echo "Digite 2 para subtrair;"
echo "Digite 3 para multiplicar;"
echo "Digite 4 para dividir."
echo ">>> "; read resposta
case "$resposta" in
"1" ) echo 'A soma dos números é: ' $(($num1 + $num2));;
"2" ) echo 'A subtração dos números é: ' $(($num1 - $num2));;
"3" ) echo 'A multiplicação dos números é: ' $(($num1 * $num2));;
"4" ) echo 'A divisão dos números é: ' $(bc -l <<< "scale=2 ; $num1 / $num2");;
* ) echo "Opção inválida!"
esac

echo "Deseja continuar? Digite: sim ou não"
read res
done