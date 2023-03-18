import "./style.css"
import validator from 'validator'

const campoDeTexto = document.getElementById('value');
const campo = document.getElementById('option');
const button = document.getElementById('button');
const resposta = document.getElementById('response');

button.addEventListener('click', (envent) => {
    envent.preventDefault();
    const campos = {
        cpf: validator.isTaxID(campoDeTexto.value, 'pt-BR'),
        email: validator.isEmail(campoDeTexto.value),
        dataDeNascimento: validator.isDate(campoDeTexto.value),
        url: validator.isURL(campoDeTexto.value),
        numeroDeCelular: validator.isMobilePhone(campoDeTexto.value, 'any'),
    };
    resposta.innerHTML = `A validação retornou ${campos[campo.value]}`;
})