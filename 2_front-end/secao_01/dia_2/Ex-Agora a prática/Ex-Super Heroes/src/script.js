const img = document.getElementById('image');
const nome = document.getElementById('name');
const button = document.getElementById('button');

const MY_TOKEN = '5931812170264889';
const BASE_URL = `https://superheroapi.com/api/${MY_TOKEN}`;

const idMaximo = 1000;

const randomId = () => Math.floor(Math.random() * idMaximo);

button.addEventListener('click', (event) => {
    event.preventDefault();
    const id = randomId;

    fetch(`${BASE_URL}/${id}`)
        .then((result) => result.jason)
        .then((data) => {
            img.src = data.image.url; 
            nome.innerHTML = data.name;
        })
        .catch((error) => newError('Id inválido'));
});