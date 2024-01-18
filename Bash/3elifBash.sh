#!/bin/bash

echo "Passou no exame?"
read resposta
if [ $resposta = "sim" ]; then
echo "Parabéns!"
elif [ $resposta = "não" ]; then
echo "Não estudou !!!"
else
echo "Não conheço a resposta: $resposta. Introduza sim ou não!"
fi