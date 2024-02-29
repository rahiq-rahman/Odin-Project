const buttons = document.getElementsByTagName('button');
let screen = document.querySelector('.screen');

const buttonPressed = e =>{
    console.log(e.target.id);
    
    switch(e.target.id){
        case 'zero':
            screen.innerHTML += '0';
            break;
        case 'one':
            screen.innerHTML += '1';
            break;
        case 'two':
            screen.innerHTML += '2';
            break;
        case 'three':
            screen.innerHTML += '3';
            break;
        case 'four':
            screen.innerHTML += '4';
            break;
        case 'five':
            screen.innerHTML += '5';
            break;
        case 'six':
            screen.innerHTML += '6';
            break;
        case 'seven':
            screen.innerHTML += '7';
            break;
        case 'eight':
            screen.innerHTML += '8';
            break;
        case 'nine':
            screen.innerHTML += '9';
            break;
    }
}
for(let button of buttons){
    button.addEventListener('click',buttonPressed);
}