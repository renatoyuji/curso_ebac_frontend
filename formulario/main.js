const form = document.getElementById('formulario');

let formValido = false;

function validacao(campoA, campoB){
    console.log(campoA, campoB)
    return campoB > campoA;
}

form.addEventListener('submit',function(e){
    e.preventDefault();
    let campoA = parseInt(document.getElementById('campo-A').value);
    let campoB = parseInt(document.getElementById('campo-B').value);

    const sucesso = "O campo B é maior que A";
    const erro = "O campo B precisa ser maior que A";

    formValido = validacao(campoA, campoB);

    if(formValido){
        const mensagemS = document.querySelector('.sucess-message');
        mensagemS.innerHTML = sucesso;
        mensagemS.style.display = 'block';

        const mensagemApagar = document.querySelector('.error-message');
        mensagemApagar.innerHTML = '';
        mensagemApagar.style.display = 'none';


    } else {
        const mensagemE = document.querySelector('.error-message');
        mensagemE.innerHTML = erro;
        mensagemE.style.display = 'block'

        const mensagemApagar = document.querySelector('.sucess-message');
        mensagemApagar.innerHTML = '';
        mensagemApagar.style.display = 'none';
    }
});