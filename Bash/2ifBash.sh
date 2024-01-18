#!/bin/bash

echo "Passou no exame?"
read resposta
if [ $resposta = 'sim' ]; then
echo 'Parabens!'
else
echo 'Não estudou !!!'
fi