console.log('teste');
const buttonSubmit = document.querySelector('.btn-submit');
const inputNumberA = document.querySelector('#number_A');

buttonSubmit.addEventListener('click', function(e){
    console.log('Apertando botão'); 
    if (inputNumberA.value === ''){
        console.log('Esta vazio o numero A');
        alert('Esta vazio o numero A')
        inputNumberA.style.border = 'solid red 1px';
    }
});