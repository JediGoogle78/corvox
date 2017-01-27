#!/bin/bash
string="Brave New World, the Phantom of Liberty"
for (( i = 0 ; i <= ${#string} ; i++ )); do
  sleep 0.1    
  echo ${string:0:${i}}
done
# for i in "${string[@]}"
#  do
#   	sleep 3
#   echo "$i"
#   done
#echo ${string[0]}
exit 0