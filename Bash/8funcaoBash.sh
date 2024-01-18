#!/bin/bash

pergunta() {
echo "Os parâmetros da função são $*."
while true 
do
echo -n "sim ou não"
read resposta
case "$resposta" in
s | sim ) return 0;;
n | não ) return 1;;
* ) echo "Responda sim ou não"
esac
done
}

echo "Os parâmetros da script são $*"
if pergunta "O nome é $1 ?"
then
echo "Olá $1"
else
echo "Engano"
fi