#!/bin/bash

texto="Variável global"

escreve () {
local texto="Variável local"
echo "A função está em execução"
echo $texto
echo "Fim da execução da função"
}

echo "Início do script"
echo $texto
echo $texto
escreve
echo "Fim do script"