#!/bin/bash

echo 'Digite um número: '; read num1
echo 'Digite outro número: '; read num2

echo 'A soma dos números é: ' $(($num1 + $num2))
echo 'A subtração dos números é: ' $(($num1 - $num2))
echo 'A multiplicação dos números é: ' $(($num1 * $num2))
echo 'A divisão dos números é: ' $(($num1 / $num2))

echo 'A divisão dos números é: ' $(bc -l <<< "scale=4 ; $num1 / $num2")