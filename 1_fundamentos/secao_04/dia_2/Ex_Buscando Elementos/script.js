// 🚀  Adicione o código abaixo a uma página HTML e adicione uma tag script. Você deverá fazer tudo usando somente JavaScript.

// Acesse o elemento elementoOndeVoceEsta.
// Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
// Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?
// Acesse o primeiroFilho a partir de pai.
// Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta.
// Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta.
// Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta.
// Agora acesse o terceiroFilho a partir de pai. -->

const elementoOndeVoceEsta = document.getElementById("elementoOndeVoceEsta");

const pai = elementoOndeVoceEsta.parentNode;
pai.style.color = "red";

const primeiroFilhoDoFilho = elementoOndeVoceEsta.firstElementChild;
primeiroFilhoDoFilho.innerText = 'primeiroFilhoDoFilho';

const primeiroFilho = pai.firstElementChild;

const primeiroFilho2 = elementoOndeVoceEsta.previousElementSibling;

const textElement = elementoOndeVoceEsta.nextSibling;

const terceiroFilho = elementoOndeVoceEsta.nextElementSibling;

const terceiroFilho = elementoOndeVoceEsta.nextElementSibling;
