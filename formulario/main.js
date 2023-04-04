const form = document.getElementById('formulario');
let campoA = parseInt(document.getElementById('campo-A').value);
let campoB = parseInt(document.getElementById('campo-B').value);
let formValido = false;

function validacao(campoA, campoB){
    return campoB > campoA;
}

form.addEventListener('submit',function(e){
    e.preventDefault();

    const sucesso = "O campo B é maior que A";
    const erro = "O campo B precisa ser maior que A";

    formValido = validacao(campoA, campoB);

    if(formValido == true){
        const mensagemS = document.querySelector('.sucess-message');
        mensagemS.innerHTML = sucesso;
        mensagemS.style.display = 'block';

    } else {
        const mensagemE = document.querySelector('.error-message');
        mensagemE.innerHTML = erro;
        mensagemE.style.display = 'block'
    }
});