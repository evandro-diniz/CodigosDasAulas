#!/bin/bash

echo "Introduza um nome: "
read nome
while [ "$nome" != "sistemas" ]; 
do
echo "Não acertou no nome - tente de novo!"
read nome
done
echo "Parabéns!"