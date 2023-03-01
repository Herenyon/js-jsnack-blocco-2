'use strict'

// Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e una lista di cognomi, Gatsby vuole generare una falsa lista di 3 invitati.

const nomi = ["Francesco", "Tesele", "Gianluca"];
const cognomi = ["Podar", "Vachi", "Zanna"];

const lista = [];

for (let i = 0; i < nomi.length; i++) {
    
    const selettoreNome = Math.floor(Math.random() * 3);
    const selettoreCognome = Math.floor(Math.random() * 3);

    lista = `${nomi[selettoreNome]} ${cognomi[selettoreCognome]}`;
    
    lista.pushN
}

console.log(lista);