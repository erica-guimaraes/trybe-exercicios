// Crie um irmão para elementoOndeVoceEsta.

const pai = document.getElementById("pai");
const irmaoElementoOndeVoceEsta = document.creatElement("section");
irmaoElementoOndeVoceEsta.id = "irmaoElementoOndeVoceEsta";
pai.appendChild(irmaoElementoOndeVoceEsta);

// Crie um filho para elementoOndeVoceEsta.

const elementoOndeVoceEsta = document.getElementById("elementoOndeVoceEsta");
const filhoElementoOndeVoceEsta = document.creatElement("section");
filhoElementoOndeVoceEsta.id = "filhoElementoOndeVoceEsta";
elementoOndeVoceEsta.appendChild(filhoElementoOndeVoceEsta);

// Crie um filho para primeiroFilhoDoFilho.

const primeiroFilhoDoFilho = document.getElementById("primeiroFilhoDoFilho");
const filhoDoPrimeiroFilhoDoFilho = document.createElement("section");
filhoDoPrimeiroFilhoDoFilho.id = filhoDoPrimeiroFilhoDoFilho;
primeiroFilhoDoFilho.appendChild(filhoDoPrimeiroFilhoDoFilho);

// A partir desse filho criado, acesse terceiroFilho.

const terceiroFilho = document.getElementById(filhoDoPrimeiroFilhoDoFilho).parentElement.parentElement.nextElementSibling;
