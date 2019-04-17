#!/bin/bash

# assume $1 > 1
n=$1

while [ $n -ne 0 ]
do
    touch "$n.js"
    n=$(($n-1))
done
echo "檔案建立完成";
