// 🚀 Exercícios - aprofunde seu conhecimento
// Para dar início a página, você deve criar algumas tags:

// Adicione a tag h1 com o texto TrybeTrip - Agência de Viagens como filho da tag body;

const body = document.getElementById("body");
const elementH1 = document.creatElement("h1");
body.appendChild(elementH1);

// Adicione a tag main com a classe main-content como filho da tag body;

const mainContent = document.creatElement("main");
mainContent.className = "main-content";
body.appendChild(mainContent);

// Adicione a tag section com a classe center-content como filho da tag main criada no passo 2;

const centerContent = document.creatElement("section");
centerContent.className = "center-content";
mainContent.appendChild(centerContent);

// Adicione a tag p como filho do section criado no passo 3 e coloque algum texto;

const elementP = document.creatElement("p");
centerContent.appendChild(elementP);
elementP.innerText = "Aprofundando o Conhecimento com o DOM"

// Adicione a tag section com a classe left-content como filho da tag main criada no passo 2;

const leftContent = document.creatElement("section");
leftContent.className = "left-content";
mainContent.appendChild(leftContent);

// Adicione a tag section com a classe right-content como filho da tag main criada no passo 2;

const rightContent = document.creatElement("section");
rightContent.className = "right-content";
mainContent.appendChild(rightContent);

// Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image. Esse elemento deve ser filho do section criado no passo 5;

const imagem = document.createElement("img");
imagem.className = "small-image";
imagem.src = https://picsum.photos/200;
leftContent.appendChild(imagem);

// Adicione uma lista não ordenada com os valores de 1 a 10 por extenso, ou seja, um, dois, três, … como valores da lista. 
// Essa lista deve ser filha do section criado no passo 6;

const listaNaoOrdenada = document.createElement("ul");
rightContent.appendChild(listaNaoOrdenada); 
const numbers = ["um", "dois", "três", "quatro", "cinco", "seis", "sete", "oito", "nove", "dez"];
    for (let index in numbers) {
        const elementLi = document.createElement("li");
        elementLi.innerHTML = numbers[index];
        listaNaoOrdenada.appendChild(elementLi);
    }

// Adicione 3 tags h3, todas sendo filhas do main criado no passo 2.

for (let index = 1; index <= 3; index += 1) {
    const elementH3 = document.createElement('h3');
    elementH3 = index;
    mainContent.appendChild(elementH3);
}
// ???????????????????????????????????

// Após criar as tags anteriores, você mostrou para a sua liderança como estava a estrutura inicial da página. 
// Sua liderança então pediu para que você fizesse algumas alterações:

// Adicione a classe title na tag h1 criada;

const title = document.createElement("h1");
title.className = "title";

// Adicione a classe description nas 3 tags h3 criadas;

const description = document.createElement("h3");
description.className = "description";
mainContent.appendChild("description");
// ???????????????????????????????????????

// Remova a section criada no passo 5 (aquele que possui a classe left-content). Utilize a função .removeChild();

const sectionLeftContent = document.getElementsByClassName("left-content");
mainContent.removeChild("sectionLeftContent");

// Centralize a section criada no passo 6 (aquele que possui a classe right-content).

const sectionRightContent = document.getElementsByClassName("right-content")[0];
sectionRightContent.style.marginRight="auto";

// De olho na dica 👀:: Para centralizar a section, basta configurar o margin-right: auto da section;

// Troque a cor de fundo do elemento pai da section criada no passo 3 (aquela que possui a classe center-content) para a cor verde;

mainContent.style.blackgroudColor = "grren";

// Remova os dois últimos elementos (nove e dez) da lista criada no passo 8.

// ??????????????????????