#!/bin/bash

idade=0
echo 'Digite sua idade: '
read idade
echo 'Sua idade eh: '
echo $idade
if [[ $idade < 18 ]]; then 
echo 'Você é menor de idade'; 
else echo 'Você é maior de idade'; 
fi