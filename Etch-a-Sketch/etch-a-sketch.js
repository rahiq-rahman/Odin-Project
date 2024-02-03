let container = document.getElementById("container");

function createGrid(){
    let size = prompt("Enter grid size: ");

    while(size > 50){
        size = prompt("Grid size should not exceed 50.Enter grid size again: ");
    }
    while (container.hasChildNodes()) {
        container.removeChild(container.firstChild);
    }
    for(let i = 0; i < size*size ; i++){
        container.innerHTML += '<div class="grid" onmouseover="pixelate(this)"></div>';
    }
}

function pixelate(x){
    let red   = Math.floor(Math.random()*255);
    let green = Math.floor(Math.random()*255);
    let blue  = Math.floor(Math.random()*255);
    let rgbCode = 'rgb(' + red + ',' + green + ',' + blue + ')';
    
    console.log(rgbCode);
    
    x.style.backgroundColor = rgbCode;
}
