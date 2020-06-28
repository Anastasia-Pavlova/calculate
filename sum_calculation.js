// 'use strict';

let button = document.querySelector('.btn');
let result = document.querySelector('.result');


function divide(x, y){

    function random (x, y){
    max = x / y + (x/y) / 2;
    min = x / y - (x/y) / 2;
    return Math.round(Math.random() * (max - min + 1) + min);
    }
    let s = x;
    a = [];
    for (i=0; i < y-1; i++){
        n = random(x, y); // случайное число
        s = s - a; // отнимаем число от остатка
        a.push(n); // заполнить массив числом
        
        console.log (n);
    }

    let k = 0;
    for (i=0; i < a.length; i++){ //суммируем массив
        k += a[i];
    }
    last = x - k;
    console.log (last);    
    result.innerHTML = a + ',' + last;
}


button.addEventListener('click', ()=>{
        let sum = +document.querySelector('.sum').value;
    let parts = +document.querySelector('.parts').value;
    divide(sum, parts);
})
window.addEventListener('keypress', (e) => {
    if(e.which === 13){
        let sum = +document.querySelector('.sum').value;
    let parts = +document.querySelector('.parts').value;
    divide(sum, parts);
    }
})


