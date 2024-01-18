#!/bin/bash

echo "Passou no exame? "
read resposta
case "$resposta" in
"sim" | "s" ) echo "Parabéns!" ;;
"não" | "n" ) echo "Não estudou !!!" ;;
* ) echo "Não conheço a resposta $resposta!" ;;
esac