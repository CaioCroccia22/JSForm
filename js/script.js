const buttonSubmit = document.querySelector('.btn-submit');
const inputNumberA = document.querySelector('#number_A');
const inputNumberB = document.querySelector('#number_B');

buttonSubmit.addEventListener('click', function(e){
    e.preventDefault();
    console.log('Apertando botão'); 

    if (parseFloat(inputNumberA.value) >= parseFloat(inputNumberB.value)){
        alert('O número A dever ser menor que o número B');
    }
    else{
        alert('Os números estão corretos')
    }
});