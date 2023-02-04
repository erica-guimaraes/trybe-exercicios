// Perceba que todo o conteúdo da página está na cor branca, utilize o que aprendeu no conteúdo de hoje para que a página fique igual ao Administrador do Tempo da Trybe.

const header = document.getElementById('header-container');
header.style.backgroundColor = 'rgb(0, 176, 105)';

const emergencyTasks = document.getElementsByClassName("emergency-tasks")[0];
emergencyTasks.style.backgroundColor = 'rgb(255, 159, 132)';

const noEmergencyTasks = document.getElementsByClassName("no-emergency-tasks")[0];
noEmergencyTasks.style.backgroundColor = 'rgb(249, 219, 94)';

const emergencyTasksH3 = document.querySelectorAll(".emergency-tasks h3");
for (let index = 0; index < emergencyTasksH3.length; index += 1) {
    emergencyTasksH3[index].style.backgroundColor = 'rgb(165, 0, 243)';
}

const noEmergencyTasksH3 = document.querySelectorAll(".no-emergency-tasks h3");
for (let index = 0; index < noEmergencyTasksH3.length; index += 1) {
    noEmergencyTasksH3[index].style.backgroundColor = 'rgb(35, 37, 37)';
}

const footerContainer = document.querySelector("#footer-container");
footerContainer.style.backgroundColor = 'rgb(0, 53, 51)';