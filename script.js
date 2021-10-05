const btnUp = document.querySelector('.sizeUp');
const btnDown = document.querySelector('.sizeDown');
const btnColor = document.querySelector('.color');
const text1 = document.querySelector('p');
const title = document.querySelector('h1');
const menu2 = document.querySelector('ul');

console.log(menu2);

let numMenu = 2;
let pSize = 36

title.textContent = 'powiększ/zmniejsz/kolor'
title.style.textTransform = 'uppercase';
title.style.margin = '20px'

for(let i = 0; i <= numMenu; i++){
    const liEl= document.createElement('li');
    liEl.textContent = i;
    menu2.append(liEl);
    liEl.style.marginBottom = '15px';
}
const firstNum = menu2.querySelector('li:first-child');
const middleNum = firstNum.nextElementSibling;
const lastNum = middleNum.nextElementSibling;
firstNum.textContent = 'Przycisk PLUS, powiększa tekst z blokadą'
middleNum.textContent = 'Przycisk MINUS zmniejsza tekst z blokadą :)'
lastNum.textContent = 'Przycisk KOLOR randomowo zmienia kolor tekstu'

const fun1 = () => {
    if (pSize >= 50) return;
    pSize += 3;
    text1.style.fontSize = pSize + 'px';
    }

const fun2 = () =>{
    if(pSize <= 10){
         return
    }else{
    pSize -= 3;
    text1.style.fontSize = pSize + 'px';
    }
}

const fun3 = () =>{
const r = Math.floor(Math.random()*255);
const g = Math.floor(Math.random()*255);
const b = Math.floor(Math.random()*255);
text1.style.color = `rgb(${r}, ${g}, ${b})`
}


btnUp.addEventListener('click', fun1);
btnDown.addEventListener('click', fun2);
btnColor.addEventListener('click', fun3);
